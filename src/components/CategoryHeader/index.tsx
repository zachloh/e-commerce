import { Product } from '@/types';
import { Divider, Grid, MediaQuery, Select, Text, Title } from '@mantine/core';
import React from 'react';
import { ChevronDown } from 'tabler-icons-react';
import styles from './CategoryHeader.module.css';

type CategoryHeaderProps = {
  category: string;
  sortedProducts: Product[];
  sortBy: string | null;
  setSortBy: React.Dispatch<React.SetStateAction<string | null>>;
};

const title: Record<string, string> = {
  men: "Men's Clothing",
  women: "Women's Clothing",
};

const CategoryHeader = ({
  category,
  sortedProducts,
  sortBy,
  setSortBy,
}: CategoryHeaderProps) => {
  return (
    <div className={styles.sticky}>
      <Grid align="center" m={0} pt={16} columns={24} gutterXs={16}>
        <Grid.Col span={24} xs={9} p={0}>
          <Title size={20}>{title[category]}</Title>
        </Grid.Col>
        <Grid.Col span={0} xs={6} p={0}>
          <MediaQuery smallerThan="xs" styles={{ display: 'none' }}>
            <Text color="dark.3" align="center">
              {sortedProducts.length}{' '}
              {sortedProducts.length === 1 ? 'item' : 'items'} found
            </Text>
          </MediaQuery>
        </Grid.Col>
        <Grid.Col span={0} xs={9} p={0}>
          <MediaQuery smallerThan="xs" styles={{ display: 'none' }}>
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
          </MediaQuery>
        </Grid.Col>
      </Grid>
      <MediaQuery largerThan="xs" styles={{ paddingBottom: 10 }}>
        <Divider mt={10} />
      </MediaQuery>
    </div>
  );
};

export default CategoryHeader;
