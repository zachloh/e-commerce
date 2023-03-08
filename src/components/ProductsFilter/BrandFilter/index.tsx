import { Accordion, Checkbox, Stack } from '@mantine/core';
import React from 'react';

type BrandFilterProps = {
  brands: string[];
  setBrands: React.Dispatch<React.SetStateAction<string[]>>;
};

const BrandFilter = ({ brands, setBrands }: BrandFilterProps) => {
  return (
    <Accordion.Item value="brand">
      <Accordion.Control>Brand</Accordion.Control>
      <Accordion.Panel>
        <Checkbox.Group value={brands} onChange={setBrands}>
          <Stack spacing={10}>
            <Checkbox value="Country Road" label="Country Road" />
            <Checkbox value="Gant" label="Gant" />
            <Checkbox value="Levi's" label="Levi's" />
            <Checkbox value="Ralph Lauren" label="Ralph Lauren" />
            <Checkbox value="Vans" label="Vans" />
          </Stack>
        </Checkbox.Group>
      </Accordion.Panel>
    </Accordion.Item>
  );
};

export default BrandFilter;
