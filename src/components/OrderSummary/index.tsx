import { Button, Card, Divider, Group, Text } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import React, { useState } from 'react';
import { ExclamationMark } from 'tabler-icons-react';
import { stripeAxios } from '@/lib/axios';
import { useCart, useTotalPrice } from '@/stores/cart';
import getStripe from '@/utils/getStripe';
import styles from './OrderSummary.module.css';

const OrderSummary = () => {
  const { totalPrice } = useTotalPrice();
  const { cart } = useCart();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setLoading(true);

      const response = await stripeAxios.post('/orders', {
        products: cart.map((item) => ({
          id: item.id,
          quantity: item.quantity,
          size: item.size,
        })),
      });

      const stripe = await getStripe();
      const { error } = await stripe!.redirectToCheckout({
        sessionId: response.data.stripeSession.id,
      });

      setLoading(false);

      if (error) {
        throw new Error(error.message);
      }
    } catch (err) {
      notifications.show({
        title: 'Unexpected Error',
        message: 'Please try again later.',
        color: 'red',
        icon: <ExclamationMark />,
      });
      setLoading(false);
    }
  };

  return (
    <Card
      withBorder
      padding={30}
      radius={0}
      bg="gray.0"
      className={styles.card}
    >
      <Text weight={600} size={18} mb={20}>
        Order Summary
      </Text>
      <Group position="apart" mb={6} noWrap>
        <Text weight={500}>Subtotal</Text>
        <Text>${totalPrice}.00</Text>
      </Group>
      <Group position="apart" noWrap>
        <Text weight={500}>Shipping</Text>
        <Text size={14}>FREE</Text>
      </Group>
      <Divider my={15} />
      <Group position="apart" noWrap>
        <Text weight={600}>Total</Text>
        <Text weight={600}>${totalPrice}.00</Text>
      </Group>
      <Button
        w="100%"
        h={50}
        size="md"
        radius={0}
        mt={20}
        onClick={handleCheckout}
        loading={loading}
      >
        CHECKOUT
      </Button>
    </Card>
  );
};

export default OrderSummary;
