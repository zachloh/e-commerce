import { getAllProducts } from '@/api/products/getAllProducts';
import { getProductById } from '@/api/products/getProductById';
import ProductItem from '@/components/ProductItem';
import ProductCard from '@/components/ProductsGrid/ProductCard';
import { Product } from '@/types';
import { Container, SimpleGrid, Title } from '@mantine/core';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';

interface Params extends ParsedUrlQuery {
  productId: string;
}

type Props = {
  product: Product | null;
  recommendedProducts: Product[] | null;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const response = await getAllProducts();

  return {
    paths: response.data.map((product) => {
      return {
        params: {
          productId: product.id.toString(),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  if (params?.productId) {
    const response = await getProductById(params.productId);

    const recommendedProducts = await Promise.all(
      response.data.attributes.recommended.map(async (id) => {
        const resp = await getProductById(id);
        return resp.data;
      })
    );

    return {
      props: {
        product: response.data,
        recommendedProducts,
      },
    };
  }

  return {
    props: {
      product: null,
      recommendedProducts: null,
    },
  };
};

const Product = ({
  product,
  recommendedProducts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container size={1200} px={16} py={50}>
      {product && <ProductItem product={product} />}
      {recommendedProducts && (
        <>
          <Title order={3} size={18} weight={600} mt={30} mb={10}>
            You May Also Like
          </Title>
          <SimpleGrid cols={3} spacing={100}>
            {recommendedProducts.map((product) => {
              return (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              );
            })}
          </SimpleGrid>
        </>
      )}
    </Container>
  );
};

export default Product;
