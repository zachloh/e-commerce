import WishlistItem from '@/components/WishlistItem';
import { useWishlist } from '@/stores/wishlist';
import { Container, MediaQuery, rem, SimpleGrid, Title } from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

const Wishlist = () => {
  const { wishlist, isHydrated } = useWishlist();

  if (!isHydrated) {
    return null;
  }

  // TODO: Show when no wishlist item

  return (
    <MediaQuery
      largerThan={768}
      styles={{ paddingLeft: rem(32), paddingRight: rem(32) }}
    >
      <Container size={1400} p={16} pt={30} pb={50}>
        <Title order={1} size={28} mb={20}>
          My Wishlist
        </Title>
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
      </Container>
    </MediaQuery>
  );
};

export default Wishlist;
