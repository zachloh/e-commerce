import CartItem from '@/components/CartItem';
import OrderSummary from '@/components/OrderSummary';
import { useCart } from '@/stores/cart';
import { Container, Grid, Title } from '@mantine/core';
import React from 'react';

const Cart = () => {
  // TODO: Show if cart is empty

  const { cart, isHydrated } = useCart();

  // TODO: Show skeleton
  if (!isHydrated) {
    return null;
  }

  return (
    <Container size={1400} p={16} pt={30}>
      <Title order={1} size={28} mb={20}>
        My Cart
      </Title>
      <Grid m={0} gutterXs={30}>
        <Grid.Col span={7} p={0}>
          {cart.map((item) => (
            <div key={`${item.id}-${item.size}`}>
              <CartItem item={item} />
            </div>
          ))}
        </Grid.Col>
        <Grid.Col span={5} p={0}>
          <OrderSummary />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Cart;
