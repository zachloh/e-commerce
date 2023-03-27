import { Container, MediaQuery, rem, SimpleGrid, Title } from '@mantine/core';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { getAllProducts } from '@/api/products/getAllProducts';
import { getProductById } from '@/api/products/getProductById';
import ProductItem from '@/components/ProductItem';
import ProductCard from '@/components/ProductsGrid/ProductCard';
import { Product } from '@/types';
import { Carousel } from '@mantine/carousel';

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
        key: response.data.id,
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
    <>
      {product && (
        <Head>
          <title>{`${product.attributes.title} | LUXE`}</title>
        </Head>
      )}
      <MediaQuery
        largerThan={768}
        styles={{ paddingLeft: rem(32), paddingRight: rem(32) }}
      >
        <Container size={1200} px={16} py={50}>
          {product && <ProductItem product={product} />}
          {recommendedProducts && (
            <>
              <Title order={3} size={18} weight={600} mt={30} mb={10}>
                You May Also Like
              </Title>
              <MediaQuery smallerThan={768} styles={{ display: 'none' }}>
                <SimpleGrid
                  cols={3}
                  spacing={20}
                  breakpoints={[
                    { minWidth: 900, cols: 3, spacing: 30 },
                    { minWidth: 1000, cols: 3, spacing: 40 },
                    { minWidth: 1100, cols: 3, spacing: 40 },
                    { minWidth: 1200, cols: 3, spacing: 50 },
                  ]}
                >
                  {recommendedProducts.map((product) => {
                    return (
                      <div key={product.id}>
                        <ProductCard
                          product={product}
                          withHeart={false}
                          sizes="(min-width: 1200px) 346px, 33vw"
                        />
                      </div>
                    );
                  })}
                </SimpleGrid>
              </MediaQuery>
              <MediaQuery largerThan={768} styles={{ display: 'none' }}>
                <Carousel
                  slideSize="80%"
                  slideGap="md"
                  withControls={false}
                  loop
                  breakpoints={[
                    { minWidth: 500, slideSize: '65%', slideGap: 'md' },
                    { minWidth: 600, slideSize: '50%', slideGap: 'md' },
                  ]}
                >
                  {recommendedProducts.map((product) => (
                    <Carousel.Slide key={product.id}>
                      <ProductCard
                        product={product}
                        withHeart={false}
                        sizes="(min-width: 1200px) 560px, (min-width: 600px) 50vw, (min-width: 500px) 65vw, 80vw"
                      />
                    </Carousel.Slide>
                  ))}
                </Carousel>
              </MediaQuery>
            </>
          )}
        </Container>
      </MediaQuery>
    </>
  );
};

export default Product;
