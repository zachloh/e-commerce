import { Center, Title } from '@mantine/core';
import Head from 'next/head';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 | Page not found</title>
      </Head>
      <Center h="100%" pb={120} px={16}>
        <div>
          <Title mb={15} order={1} align="center" weight={600}>
            404
          </Title>
          <Title order={2} align="center" weight={500} size={16}>
            This page could not be found.
          </Title>
        </div>
      </Center>
    </>
  );
}
