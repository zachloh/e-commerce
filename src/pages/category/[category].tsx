import { getCategories } from '@/api/categories/getCategories';
import { getProductsByCategory } from '@/api/products/getProductsByCategory';
import CategoryHeader from '@/components/CategoryHeader';
import FilterAccordion from '@/components/FilterAccordion';
import ProductsFilter from '@/components/ProductsFilter';
import ProductsGrid from '@/components/ProductsGrid';
import { useFilter } from '@/hooks/useFilter';
import { Product } from '@/types';
import { filterProducts } from '@/utils/filterProducts';
import { sortProducts } from '@/utils/sortProducts';
import { Container, Divider, Grid, MediaQuery } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React, { useState } from 'react';

interface Params extends ParsedUrlQuery {
  category: string;
}

type Props = {
  products: Product[];
  recommendedProducts: Product[];
  category: string;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const response = await getCategories();

  return {
    paths: response.data.map((category) => {
      return {
        params: {
          category: category.attributes.title,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  if (params?.category) {
    const response = await getProductsByCategory(params.category);
    return {
      props: {
        products: response.data,
        recommendedProducts: response.data.slice(0, 4),
        category: params.category,
      },
    };
  }

  return {
    props: {
      products: [],
      recommendedProducts: [],
      category: '',
    },
  };
};

const Category = ({
  products,
  recommendedProducts,
  category,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [sortBy, setSortBy] = useState<string | null>('default');
  const [debouncedSortBy] = useDebouncedValue(sortBy, 300);
  const { filter, debouncedFilter, setFilter, resetFilter } = useFilter();

  // TODO: Add useMemo
  const filteredProducts = filterProducts(products, debouncedFilter);
  const sortedProducts = sortProducts(filteredProducts, debouncedSortBy);

  // TODO: Change to sticky behavior

  return (
    <Container size={1400} p={16}>
      <CategoryHeader
        category={category}
        sortedProducts={sortedProducts}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <Divider my={10} />
      <Grid m={0} gutterXs={32} columns={24}>
        <Grid.Col p={0} span={24} xs={12} sm={9} md={8} lg={7}>
          <FilterAccordion
            sortedProducts={sortedProducts}
            resetFilter={resetFilter}
          >
            <ProductsFilter
              filter={filter}
              setFilter={setFilter}
              resetFilter={resetFilter}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </FilterAccordion>
          <MediaQuery smallerThan="xs" styles={{ display: 'none' }}>
            <div>
              <ProductsFilter
                filter={filter}
                setFilter={setFilter}
                resetFilter={resetFilter}
                sortBy={sortBy}
                setSortBy={setSortBy}
              />
            </div>
          </MediaQuery>
        </Grid.Col>
        <Grid.Col p={0} span={24} xs={12} sm={15} md={16} lg={17}>
          <ProductsGrid
            products={sortedProducts}
            recommendedProducts={recommendedProducts}
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Category;
