import { Center, Title } from '@mantine/core';
import Head from 'next/head';

export default function Custom500() {
  return (
    <>
      <Head>
        <title>500 | Internal Server Error</title>
      </Head>
      <Center h="100%" pb={120} px={16}>
        <div>
          <Title mb={15} order={1} align="center" weight={600}>
            500
          </Title>
          <Title order={2} align="center" weight={500} size={16}>
            Internal Server Error.
          </Title>
        </div>
      </Center>
    </>
  );
}
