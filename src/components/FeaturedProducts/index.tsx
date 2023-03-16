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
      <SimpleGrid cols={4} spacing={30}>
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default FeaturedProducts;
