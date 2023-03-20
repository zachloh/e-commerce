import { Product } from '@/types';
import { Grid, MediaQuery, Text, Title } from '@mantine/core';
import React from 'react';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

type ProductItemProps = {
  product: Product;
};

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <>
      <Grid m={0} gutterXs={30} gutterMd={50}>
        <MediaQuery smallerThan="xs" styles={{ marginBottom: 30 }}>
          <Grid.Col span={12} sm={6} p={0}>
            <ProductImage product={product} />
          </Grid.Col>
        </MediaQuery>
        <Grid.Col span={12} sm={6} p={0}>
          <ProductInfo product={product} />
        </Grid.Col>
      </Grid>
      <Title order={2} size={16} weight={600} mt={30}>
        Product Details
      </Title>
      <Text color="dark.3" size={15}>
        {product.attributes.brand.data.attributes.title} delivers wardrobe
        essentials made with superior grade cotton fabrics, which offer a
        superior handfeel, strength and lasting quality. With a focus on key
        styles and shapes that everyone needs in their wardrobe, you&apos;ll be
        ready for anything life may throw at you. Whether your look is clean and
        casual or sharp and sophisticated,
        {` ${product.attributes.brand.data.attributes.title} `}
        has what you need to achieve that effortlessly cool style.
      </Text>
    </>
  );
};

export default ProductItem;
