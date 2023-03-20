import { useTotalPrice } from '@/stores/cart';
import { Button, Card, Divider, Group, Text } from '@mantine/core';
import React from 'react';
import styles from './OrderSummary.module.css';

const OrderSummary = () => {
  const { totalPrice, isHydrated } = useTotalPrice();

  // TODO: Show skeleton
  if (!isHydrated) {
    return null;
  }

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
      <Button w="100%" h={50} size="md" radius={0} mt={20}>
        CHECKOUT
      </Button>
    </Card>
  );
};

export default OrderSummary;
