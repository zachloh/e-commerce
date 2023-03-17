import { useCartStore } from '@/stores/cart';
import { useWishlist, useWishlistStore } from '@/stores/wishlist';
import { Product } from '@/types';
import { ActionIcon, Button, Group, Select, Text, Title } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { FaShoppingCart } from 'react-icons/fa';
import { FaBox } from 'react-icons/fa';
import { ChevronDown } from 'tabler-icons-react';
import styles from './ProductInfo.module.css';

type ProductInfoProps = {
  product: Product;
};

const ProductInfo = ({ product }: ProductInfoProps) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const { wishlist } = useWishlist();
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  const [hearted, setHearted] = useState(false);

  const [size, setSize] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const isAddedToWishlist = wishlist.some((item) => item.id === product.id);
    if (isAddedToWishlist) {
      setHearted(true);
    }
  }, [wishlist, product.id]);

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
    addToCart(product, size);
    setAddedToCart(true);
  };

  const handleClickWishlist = () => {
    toggleWishlist(product);
    setHearted((h) => !h);
  };

  return (
    <>
      <Title order={1} size={20} weight={500} mb={20}>
        {product.attributes.title}
      </Title>
      <Text mb={20}>{product.attributes.brand.data.attributes.title}</Text>
      <Text weight={500} mb={20}>
        ${product.attributes.price}.00
      </Text>
      <Select
        placeholder="Pick a size"
        data={product.attributes.sizes}
        size="md"
        mb={20}
        radius={2}
        rightSection={<ChevronDown size={20} color="#22B8CF" />}
        styles={{ rightSection: { pointerEvents: 'none' } }}
        aria-label="Pick a size"
        value={size}
        onChange={(value) => {
          setSize(value);
          setError(false);
        }}
        error={error}
      />
      <Group noWrap mb={20}>
        <Button
          h={50}
          radius={2}
          w="100%"
          size="md"
          onClick={handleAddToCart}
          disabled={addedToCart}
          styles={(theme) => ({
            root: {
              '&:disabled, &[data-disabled]': {
                backgroundColor: theme.colors.cyan[6],
                color: 'white',
              },
            },
          })}
          className={`${styles['cart-btn']} ${addedToCart ? styles.added : ''}`}
          aria-label="Add to cart"
        >
          <FaShoppingCart className={styles.cart} />
          <FaBox className={styles.box} />
          <span className={styles['cart-text']}>ADD TO CART</span>
        </Button>
        <ActionIcon
          variant="outline"
          size={50}
          color="cyan"
          radius={2}
          onClick={handleClickWishlist}
          className={styles['heart-button']}
        >
          <FiHeart
            className={`${styles.heart} ${hearted ? styles.active : ''}`}
          />
        </ActionIcon>
      </Group>
      <Text weight={600} size={15}>
        Material
      </Text>
      <Text size={14} color="dark.3" mb={20}>
        {/* TODO: Add material in strapi */}
        100% Cotton
      </Text>
      <Text weight={600} size={15}>
        Care
      </Text>
      <Text size={14} color="dark.3" mb={20}>
        Refer to product for care instructions.
      </Text>
      <Text weight={600} size={15}>
        Delivery
      </Text>
      <Text size={14} color="dark.3" mb={20}>
        This item is sent directly from our partner and will arrive separately
        if ordered with other items.
      </Text>
      <Text weight={600} size={15}>
        Returns
      </Text>
      <Text size={14} color="dark.3">
        Free returns within 30 days.
      </Text>
    </>
  );
};

export default ProductInfo;
