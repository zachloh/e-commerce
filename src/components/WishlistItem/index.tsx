import { useCartStore } from '@/stores/cart';
import { useWishlistStore } from '@/stores/wishlist';
import { Product } from '@/types';
import { Anchor, Button, Select, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { ChevronDown, Trash } from 'tabler-icons-react';
import styles from './WishlistItem.module.css';

type WishlistItemProps = {
  item: Product;
};

const WishlistItem = ({ item }: WishlistItemProps) => {
  const [size, setSize] = useState<string | null>(null);
  const [error, setError] = useState(false);

  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishList
  );

  const handleAddToCart = () => {
    if (size === null) {
      setError(true);
      return;
    }
    addToCart(item, size);
  };

  return (
    <div>
      <Anchor
        component={Link}
        href={`/product/${item.id}`}
        className={styles.link}
      >
        <div className={styles['image-wrapper']}>
          <Image
            src={item.attributes.image1.data.attributes.url}
            alt={item.attributes.image1.data.attributes.alternativeText}
            fill
            style={{ objectFit: 'cover', objectPosition: '50% 10%' }}
            // TODO: Set sizes
            sizes="25vw"
            placeholder="blur"
            blurDataURL={item.attributes.image1.data.attributes.placeholder}
          />
        </div>
      </Anchor>
      <Anchor
        component={Link}
        href={`/product/${item.id}`}
        color="dark"
        className={styles.link}
      >
        <Text weight={500} mt={15}>
          {item.attributes.title}
        </Text>
        <Text my={5}>{item.attributes.brand.data.attributes.title}</Text>
        <Text weight={500}>${item.attributes.price}.00</Text>
      </Anchor>
      <Select
        placeholder="Pick a size"
        data={item.attributes.sizes}
        size="md"
        radius={2}
        rightSection={<ChevronDown size={20} color="#22B8CF" />}
        styles={{ rightSection: { pointerEvents: 'none' } }}
        aria-label="Pick a size"
        value={size}
        onChange={setSize}
        mt={20}
        mb={15}
        error={error ? 'Please pick a size' : false}
      />
      <Button
        radius={2}
        w="100%"
        h={44}
        mb={15}
        onClick={handleAddToCart}
        disabled={size === null}
      >
        ADD TO CART
      </Button>
      <Button
        radius={2}
        w="100%"
        h={44}
        variant="default"
        leftIcon={<Trash size={18} />}
        onClick={() => removeFromWishlist(item.id)}
      >
        REMOVE
      </Button>
    </div>
  );
};

export default WishlistItem;
