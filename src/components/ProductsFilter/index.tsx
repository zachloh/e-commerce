import {
  Accordion,
  Button,
  Divider,
  Group,
  MediaQuery,
  ScrollArea,
  Text,
} from '@mantine/core';
import React from 'react';
import BrandFilter from './BrandFilter';
import NewArrivalsFilter from './NewArrivalsFilter';
import PriceFilter from './PriceFilter';
import SizeFilter from './SizeFilter';
import Sort from './Sort';
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
  sortBy: string | null;
  setSortBy: React.Dispatch<React.SetStateAction<string | null>>;
  height: string | number;
  category: string;
  id: number;
};

const ProductsFilter = ({
  filter,
  setFilter,
  resetFilter,
  sortBy,
  setSortBy,
  height,
  category,
  id,
}: ProductsFilterProps) => {
  const { types, price, isNew, sizes, brands } = filter;
  const { setTypes, setMinPrice, setMaxPrice, setIsNew, setSizes, setBrands } =
    setFilter;

  return (
    <>
      <MediaQuery smallerThan="xs" styles={{ display: 'none' }}>
        <Group position="apart" pl={20}>
          <Text weight={600} size={18}>
            Filter
          </Text>
          <Button
            variant="subtle"
            color="gray.7"
            onClick={resetFilter}
            styles={{
              label: {
                textDecoration: 'underline',
              },
            }}
          >
            Clear all
          </Button>
        </Group>
      </MediaQuery>
      <Divider color="gray.3" />
      <ScrollArea h={height} type="auto" scrollbarSize={10}>
        <Accordion multiple={true} variant="default">
          <Sort sortBy={sortBy} setSortBy={setSortBy} id={id} />
          <TypeFilter types={types} setTypes={setTypes} category={category} />
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
      </ScrollArea>
    </>
  );
};

export default ProductsFilter;
