import '../ui/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { defaultTheme } from '../ui/themes/theme';
import Header from '../ui/components/Header/Header.component';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
