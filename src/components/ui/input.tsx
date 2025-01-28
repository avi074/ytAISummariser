import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <input
        className={`flex h-10 w-full rounded-md border bg-white/80 px-3 py-2 text-base 
          border-blueviolet/20 text-gray-900 placeholder:text-gray-500
          backdrop-blur-sm input-transition
          focus:outline-none focus:ring-2 focus:ring-blueviolet/50 focus:border-transparent
          dark:border-blue-500/20 dark:bg-gray-900/80 dark:text-gray-100 
          dark:placeholder-gray-400 dark:focus:ring-blue-500/50 ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);