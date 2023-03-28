import { useWishlist, useWishlistStore } from '@/stores/wishlist';
import { Product } from '@/types';
import { Anchor, Text, UnstyledButton, useMantineTheme } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import styles from './ProductCard.module.css';

type ProductCardProps = {
  product: Product;
  withHeart?: boolean;
  sizes: string;
};

const ProductCard = ({
  product,
  withHeart = true,
  sizes,
}: ProductCardProps) => {
  const theme = useMantineTheme();
  const { wishlist } = useWishlist();
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const isAddedToWishlist = wishlist.some((item) => item.id === product.id);
    if (isAddedToWishlist) {
      setClicked(true);
    }
  }, [wishlist, product.id]);

  const handleClickWishlist = () => {
    toggleWishlist(product);
    setClicked((c) => !c);
  };

  return (
    <>
      <figure className={styles.figure}>
        <Anchor
          component={Link}
          href={`/product/${product.id}`}
          className={styles.link}
        >
          <div className={styles.wrapper}>
            <Image
              src={product.attributes.image1.data.attributes.url}
              alt={product.attributes.image1.data.attributes.alternativeText}
              fill
              style={{ objectFit: 'cover', objectPosition: '50% 10%' }}
              sizes={sizes}
              placeholder="blur"
              blurDataURL={
                product.attributes.image1.data.attributes.placeholder
              }
              className={styles.primary}
            />
          </div>
        </Anchor>
        {withHeart && (
          <UnstyledButton
            className={styles['heart-button']}
            onClick={handleClickWishlist}
            aria-label="Add to wishlist"
          >
            <FiHeart
              color={theme.colors.cyan[7]}
              className={`${styles.heart} ${clicked ? styles.active : ''}`}
            />
          </UnstyledButton>
        )}
      </figure>
      <Anchor
        component={Link}
        href={`/product/${product.id}`}
        color="dark"
        className={styles.link}
      >
        <Text size={14} weight={600} mt={10}>
          {product.attributes.title}
        </Text>
        <Text size={14}>{product.attributes.brand.data.attributes.title}</Text>
        <Text size={14} weight={600} my={3}>
          ${product.attributes.price}.00
        </Text>
        {product.attributes.isNew && (
          <Text size={12} weight={600} color="cyan.9">
            NEW
          </Text>
        )}
      </Anchor>
    </>
  );
};

export default ProductCard;
