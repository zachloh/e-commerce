import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import Layout from '@/components/Layout';
import AppProviders from '@/providers';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>LUXE</title>
        <meta
          name="description"
          content="Get all of your wardrobe essentials from our men's and women's collections here at Luxe."
        />
      </Head>
      <AppProviders>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProviders>
      <Analytics />
    </>
  );
}
