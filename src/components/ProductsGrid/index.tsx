import { Product } from '@/types';
import { Box, Text, Title } from '@mantine/core';
import React from 'react';
import ProductCard from './ProductCard';
import styles from './ProductsGrid.module.css';

type ProductsGridProps = {
  products: Product[];
  recommendedProducts: Product[];
};

const ProductsGrid = ({ products, recommendedProducts }: ProductsGridProps) => {
  if (products.length === 0) {
    return (
      <Box w="100%">
        <Title order={2} size={20} weight={600} className={styles.title}>
          We couldn&apos;t find any results
        </Title>
        <Text mt={10} color="dark.3" size={15}>
          Please adjust or clear filters to view more products.
        </Text>
        <Title mt={30} mb={5} order={3} size={18} weight={600}>
          Today&apos;s most popular
        </Title>
        <div className={styles.recommended}>
          {recommendedProducts.map((product) => (
            <div key={product.id}>
              <ProductCard
                product={product}
                withHeart={false}
                sizes="(min-width: 1280px) 230px, (min-width: 1034px) 25vw, (min-width: 768px) 33vw, (min-width: 452px) 50vw, 100vw"
              />
            </div>
          ))}
        </div>
      </Box>
    );
  }

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard
            product={product}
            sizes="(min-width: 1280px) 230px, (min-width: 1034px) 25vw, (min-width: 768px) 33vw, (min-width: 452px) 50vw, 100vw"
          />
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
