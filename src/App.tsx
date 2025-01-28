import { Toaster } from 'react-hot-toast';
import { VideoSummary } from './components/VideoSummary';
import { ThemeProvider } from './components/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="video-summary-theme">
      <Toaster position="top-right" />
      <VideoSummary />
    </ThemeProvider>
  );
}

export default App;