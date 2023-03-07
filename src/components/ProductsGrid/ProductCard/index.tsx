import { Product } from '@/types';
import { Text } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import styles from './ProductCard.module.css';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <figure>
      <div className={styles.wrapper}>
        <Image
          src={product.attributes.image1.data.attributes.url}
          alt={product.attributes.image1.data.attributes.alternativeText}
          fill
          style={{ objectFit: 'cover' }}
          // TODO: Set sizes
          sizes="25vw"
          placeholder="blur"
          blurDataURL={product.attributes.image1.data.attributes.placeholder}
          className={styles.primary}
        />
        <Image
          src={product.attributes.image2.data.attributes.url}
          alt={product.attributes.image2.data.attributes.alternativeText}
          fill
          style={{ objectFit: 'cover' }}
          // TODO: Set sizes
          sizes="25vw"
          placeholder="blur"
          blurDataURL={product.attributes.image2.data.attributes.placeholder}
          className={styles.secondary}
        />
      </div>
      <Text size={14} weight={600} mt={10}>
        {product.attributes.brand.data.attributes.title}
      </Text>
      <Text size={14}>{product.attributes.title}</Text>
      <Text size={14} weight={600} my={3}>
        ${product.attributes.price}
      </Text>
      {product.attributes.isNew && (
        <Text size={12} weight={600} color="cyan.9">
          NEW
        </Text>
      )}
    </figure>
  );
};

export default ProductCard;
