import { Accordion, Box, Button, Divider, Group, Text } from '@mantine/core';
import React from 'react';
import BrandFilter from './BrandFilter';
import NewArrivalsFilter from './NewArrivalsFilter';
import PriceFilter from './PriceFilter';
import SizeFilter from './SizeFilter';
import TypeFilter from './TypeFilter';

type ProductsFilterProps = {
  filter: {
    types: string[];
    price: {
      minPrice: number | '';
      maxPrice: number | '';
    };
    isNew: boolean;
    sizes: string[];
    brands: string[];
  };
  setFilter: {
    setTypes: React.Dispatch<React.SetStateAction<string[]>>;
    setMinPrice: React.Dispatch<React.SetStateAction<number | ''>>;
    setMaxPrice: React.Dispatch<React.SetStateAction<number | ''>>;
    setIsNew: React.Dispatch<React.SetStateAction<boolean>>;
    setSizes: React.Dispatch<React.SetStateAction<string[]>>;
    setBrands: React.Dispatch<React.SetStateAction<string[]>>;
  };
  resetFilter: () => void;
};

const ProductsFilter = ({
  filter,
  setFilter,
  resetFilter,
}: ProductsFilterProps) => {
  const { types, price, isNew, sizes, brands } = filter;
  const { setTypes, setMinPrice, setMaxPrice, setIsNew, setSizes, setBrands } =
    setFilter;

  return (
    <Box w={320} sx={{ flexShrink: 0 }}>
      <Group position="apart" pl={20}>
        <Text weight={600} size={18}>
          Filter
        </Text>
        <Button variant="subtle" color="gray.7" onClick={resetFilter}>
          Clear all
        </Button>
      </Group>
      <Divider color="gray.3" />
      <Accordion multiple={true} variant="default">
        <TypeFilter types={types} setTypes={setTypes} />
        <PriceFilter
          minPrice={price.minPrice}
          setMinPrice={setMinPrice}
          maxPrice={price.maxPrice}
          setMaxPrice={setMaxPrice}
        />
        <NewArrivalsFilter isNew={isNew} setIsNew={setIsNew} />
        <SizeFilter sizes={sizes} setSizes={setSizes} />
        <BrandFilter brands={brands} setBrands={setBrands} />
      </Accordion>
    </Box>
  );
};

export default ProductsFilter;
