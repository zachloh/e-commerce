const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import { Button, Center, Group, MediaQuery, rem, Text } from '@mantine/core';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useCartStore } from '@/stores/cart';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const sessionId = context.query.session_id;

  if (typeof sessionId === 'string') {
    try {
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      const currentTime = Math.floor(Date.now() / 1000);

      const isPaymentSuccessful =
        session.payment_status === 'paid' && session.expires_at > currentTime;

      if (isPaymentSuccessful) {
        return {
          props: {},
        };
      }

      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    } catch (err) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
  }

  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};

export default function Success() {
  const router = useRouter();
  const resetCart = useCartStore((state) => state.resetCart);

  useEffect(() => {
    router.replace('/success', undefined, { shallow: true });
    resetCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MediaQuery largerThan={768} styles={{ padding: rem(32) }}>
      <Center p={16} mt={30}>
        <div>
          <Text mb={15} align="center" size={36} weight={600}>
            Thank you.
          </Text>
          <Text mb={30} align="center" size={18} weight={500}>
            Your order was completed successfully.
          </Text>
          <Group position="center">
            <Button
              size="md"
              radius={2}
              h={50}
              component={Link}
              href="/"
              replace
            >
              Continue Shopping
            </Button>
          </Group>
        </div>
      </Center>
    </MediaQuery>
  );
}
