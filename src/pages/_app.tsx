import '../ui/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { defaultTheme } from '../ui/themes/theme';
import Header from '../ui/components/Header/Header.component';
import HeaderAdmin from '../ui/components/HeaderAdmin/HeaderAdmin';

import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  
  return (
    <ThemeProvider theme={defaultTheme}>
      {
        pathname == '/' ? <Header/> : <HeaderAdmin/>
      }
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
