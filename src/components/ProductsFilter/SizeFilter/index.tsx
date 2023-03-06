import { Accordion, Checkbox, SimpleGrid } from '@mantine/core';
import React from 'react';

const SizeFilter = () => {
  return (
    <Accordion.Item value="size">
      <Accordion.Control>Size</Accordion.Control>
      <Accordion.Panel>
        <Checkbox.Group>
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
