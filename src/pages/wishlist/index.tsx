import WishlistItem from '@/components/WishlistItem';
import { useWishlist } from '@/stores/wishlist';
import { Container, SimpleGrid, Title } from '@mantine/core';
import React from 'react';

const Wishlist = () => {
  const { wishlist, isHydrated } = useWishlist();

  // TODO: Show skeleton
  if (!isHydrated) {
    return null;
  }

  // TODO: Show when no wishlist item

  // TODO: Animate removing item
  return (
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
        {wishlist.map((item) => (
          <div key={item.id}>
            <WishlistItem item={item} />
          </div>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Wishlist;
