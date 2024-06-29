import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout'; 
import { AppContextProvider } from '@/contexts/ AppContextProvider'
import React from 'react';
import { useRouter } from 'next/router';
import TopBar from '@/components/TopBar'; 
import Footer from '@/components/Footer'; 

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const shouldHideTopBarAndFooter = () => {
    const hiddenRoutes = ['/login', '/create-account'];
    return hiddenRoutes.includes(router.pathname);
  };

  return (
    <AppContextProvider>
      {!shouldHideTopBarAndFooter() && <TopBar />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {!shouldHideTopBarAndFooter() && <Footer />}
    </AppContextProvider>
  );
}
