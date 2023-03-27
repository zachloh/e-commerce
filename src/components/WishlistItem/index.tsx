import { useCartStore } from '@/stores/cart';
import { useWishlistStore } from '@/stores/wishlist';
import { Product } from '@/types';
import { Anchor, Button, Select, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ChevronDown, Trash } from 'tabler-icons-react';
import AddToCartBtn from '../AddToCartBtn';
import styles from './WishlistItem.module.css';

type WishlistItemProps = {
  item: Product;
};

const WishlistItem = ({ item }: WishlistItemProps) => {
  const [size, setSize] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishList
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setAddedToCart(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [addedToCart]);

  const handleAddToCart = () => {
    if (size === null) {
      setError(true);
      return;
    }
    addToCart(item, size);
    setAddedToCart(true);
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
            sizes="(min-width: 1400px) 298px, (min-width: 1200px) 25vw, (min-width: 768px) 33vw, (min-width: 500px) 50vw, 100vw"
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
        onChange={(value) => {
          setSize(value);
          setError(false);
        }}
        mt={10}
        mb={15}
        error={error}
      />
      <AddToCartBtn
        height={44}
        size="sm"
        addedToCart={addedToCart}
        handleAddToCart={handleAddToCart}
      />
      <Button
        radius={2}
        w="100%"
        h={44}
        mt={15}
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
