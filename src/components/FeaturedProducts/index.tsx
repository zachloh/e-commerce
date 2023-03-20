import { Product } from '@/types';
import { Container, SimpleGrid, Title } from '@mantine/core';
import React from 'react';
import ProductCard from '../ProductsGrid/ProductCard';

type FeaturedProductsProps = {
  products: Product[];
};

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  return (
    <Container size={1200} px={16} mb={80}>
      <Title order={2} size={20} weight={600} mb={10}>
        Featured Products
      </Title>
      <SimpleGrid
        cols={1}
        spacing={10}
        breakpoints={[
          { minWidth: 425, cols: 2, spacing: 20 },
          { minWidth: 768, cols: 2, spacing: 30 },
          { minWidth: 900, cols: 4, spacing: 20 },
          { minWidth: 1024, cols: 4, spacing: 30 },
        ]}
      >
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} withHeart={false} />
          </div>
        ))}
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} withHeart={false} />
          </div>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default FeaturedProducts;
