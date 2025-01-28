import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  size?: 'default' | 'icon';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'default', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium button-transition disabled:opacity-50 disabled:pointer-events-none';
    
    const variants = {
      primary: `bg-gradient-to-r from-blueviolet to-blueviolet/90 text-white 
        hover:from-blueviolet/95 hover:to-blueviolet/85
        dark:from-blue-600 dark:to-blue-500 
        dark:hover:from-blue-500 dark:hover:to-blue-400`,
      ghost: `bg-white/50 text-blueviolet hover:bg-white/80 
        dark:bg-gray-800/50 dark:text-blue-400 dark:hover:bg-gray-800/80`,
    };

    const sizes = {
      default: 'h-10 py-2 px-4',
      icon: 'h-10 w-10',
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);