import CartItem from '@/components/CartItem';
import OrderSummary from '@/components/OrderSummary';
import { useCart } from '@/stores/cart';
import { Container, Grid, MediaQuery, rem, Title } from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

const Cart = () => {
  // TODO: Show if cart is empty

  const { cart, isHydrated } = useCart();

  if (!isHydrated) {
    return null;
  }

  return (
    <MediaQuery
      largerThan={768}
      styles={{ paddingLeft: rem(32), paddingRight: rem(32) }}
    >
      <Container size={1400} p={16} pt={30} pb={50}>
        <Title order={1} size={28}>
          My Cart
        </Title>
        <Grid m={0} gutterSm={30} gutterLg={50} align="flex-start">
          <Grid.Col span={12} sm={6} md={7} p={0} mt={15}>
            <AnimatePresence>
              {cart.map((item) => (
                <motion.div
                  key={`${item.id}-${item.size}`}
                  layout
                  initial={false}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    opacity: { ease: 'linear' },
                    layout: { duration: 0.4 },
                  }}
                >
                  <CartItem item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </Grid.Col>
          <Grid.Col
            span={12}
            sm={6}
            md={5}
            p={0}
            sx={{ position: 'sticky', top: '176px' }}
          >
            <OrderSummary />
          </Grid.Col>
        </Grid>
      </Container>
    </MediaQuery>
  );
};

export default Cart;
