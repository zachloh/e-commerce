import { Accordion, Checkbox, SimpleGrid } from '@mantine/core';
import React from 'react';

type SizeFilterProps = {
  sizes: string[];
  setSizes: React.Dispatch<React.SetStateAction<string[]>>;
};

const SizeFilter = ({ sizes, setSizes }: SizeFilterProps) => {
  return (
    <Accordion.Item value="size">
      <Accordion.Control>Size</Accordion.Control>
      <Accordion.Panel>
        <Checkbox.Group value={sizes} onChange={setSizes}>
          <SimpleGrid cols={2} verticalSpacing={10}>
            <Checkbox value="S" label="S" />
            <Checkbox value="M" label="M" />
            <Checkbox value="L" label="L" />
            <Checkbox value="XL" label="XL" />
          </SimpleGrid>
        </Checkbox.Group>
      </Accordion.Panel>
    </Accordion.Item>
  );
};

export default SizeFilter;
