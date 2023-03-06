import Layout from '@/components/Layout';
import AppProviders from '@/providers';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProviders>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProviders>
  );
}
