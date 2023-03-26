import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import React from 'react';
import WishlistItem from '@/components/WishlistItem';
import { useWishlist } from '@/stores/wishlist';
import {
  Container,
  MediaQuery,
  rem,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';

const Wishlist = () => {
  const { wishlist, isHydrated } = useWishlist();

  if (!isHydrated) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Wishlist | LUXE</title>
      </Head>
      <MediaQuery
        largerThan={768}
        styles={{ paddingLeft: rem(32), paddingRight: rem(32) }}
      >
        <Container size={1400} p={16} pt={30} pb={50}>
          <Title order={1} size={28} mb={20}>
            My Wishlist
          </Title>
          <AnimatePresence initial={false}>
            {wishlist.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Text mt={30} mb={20} align="center" size={18} weight={500}>
                  Your wishlist is currently empty.
                </Text>
                <Text align="center">
                  Click the heart button to add items on your wishlist.
                </Text>
              </motion.div>
            )}
          </AnimatePresence>
          {wishlist.length > 0 && (
            <SimpleGrid
              cols={1}
              spacing={36}
              breakpoints={[
                { minWidth: 500, cols: 2, spacing: 24 },
                { minWidth: 768, cols: 3, spacing: 24 },
                { minWidth: 1200, cols: 4, spacing: 24 },
                { minWidth: 1400, cols: 4, spacing: 48 },
              ]}
            >
              <AnimatePresence>
                {wishlist.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={false}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      opacity: { ease: 'linear' },
                      layout: { duration: 0.4 },
                    }}
                  >
                    <WishlistItem item={item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </SimpleGrid>
          )}
        </Container>
      </MediaQuery>
    </>
  );
};

export default Wishlist;
