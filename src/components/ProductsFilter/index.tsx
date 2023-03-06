import { Accordion, Button, Divider, Group, Text } from '@mantine/core';
import React from 'react';
import BrandFilter from './BrandFilter';
import NewArrivalsFilter from './NewArrivalsFilter';
import PriceFilter from './PriceFilter';
import SizeFilter from './SizeFilter';
import TypeFilter from './TypeFilter';

const ProductsFilter = () => {
  return (
    <>
      <Group position="apart" pl={20}>
        <Text weight={600} size={18}>
          Filter
        </Text>
        <Button variant="subtle" color="dark.3">
          Clear all
        </Button>
      </Group>
      <Divider color="gray.3" />
      <Accordion multiple={true} variant="default">
        <TypeFilter />
        <PriceFilter />
        <NewArrivalsFilter />
        <SizeFilter />
        <BrandFilter />
      </Accordion>
    </>
  );
};

export default ProductsFilter;
