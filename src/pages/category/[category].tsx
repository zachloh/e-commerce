import { getCategories } from '@/api/categories/getCategories';
import { getProductsByCategory } from '@/api/products/getProductsByCategory';
import ProductsFilter from '@/components/ProductsFilter';
import ProductsGrid from '@/components/ProductsGrid';
import { useFilter } from '@/hooks/useFilter';
import { Product } from '@/types';
import { filterProducts } from '@/utils/filterProducts';
import { sortProducts } from '@/utils/sortProducts';
import {
  Container,
  Divider,
  Grid,
  Group,
  Select,
  Text,
  Title,
} from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React, { useState } from 'react';
import { ChevronDown } from 'tabler-icons-react';

interface Params extends ParsedUrlQuery {
  category: string;
}

type Props = {
  products: Product[];
  recommendedProducts: Product[];
  category: string;
};

const title: Record<string, string> = {
  men: "Men's Clothing",
  women: "Women's Clothing",
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

  const filteredProducts = filterProducts(products, debouncedFilter);
  const sortedProducts = sortProducts(filteredProducts, debouncedSortBy);

  // TODO: Change to sticky behavior

  return (
    <Container size={1400} p={16}>
      <Grid align="center" m={0}>
        <Grid.Col span={4} p={0}>
          <Title size={24}>{title[category]}</Title>
        </Grid.Col>
        <Grid.Col span={4} p={0}>
          <Text color="dark.3" align="center">
            {sortedProducts.length}{' '}
            {sortedProducts.length === 1 ? 'item' : 'items'} found
          </Text>
        </Grid.Col>
        <Grid.Col span={4} p={0}>
          <Select
            ml="auto"
            maw={250}
            maxDropdownHeight={250}
            rightSection={<ChevronDown size={20} />}
            data={[
              { value: 'default', label: 'Popularity' },
              { value: 'new', label: 'New Arrivals' },
              { value: 'priceAsc', label: 'Price: Low to High' },
              { value: 'priceDesc', label: 'Price: High to Low' },
              { value: 'brandAsc', label: 'Brand: A to Z' },
              { value: 'brandDesc', label: 'Brand: Z to A' },
            ]}
            aria-label="Sort products by"
            styles={{ rightSection: { pointerEvents: 'none' } }}
            value={sortBy}
            onChange={setSortBy}
          />
        </Grid.Col>
      </Grid>
      <Divider my={10} />
      <Group align="flex-start" noWrap spacing={32}>
        <ProductsFilter
          filter={filter}
          setFilter={setFilter}
          resetFilter={resetFilter}
        />
        <ProductsGrid
          products={sortedProducts}
          recommendedProducts={recommendedProducts}
        />
      </Group>
    </Container>
  );
};

export default Category;
