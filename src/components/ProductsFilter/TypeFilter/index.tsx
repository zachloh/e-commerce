import { Accordion, Checkbox, Stack } from '@mantine/core';
import React from 'react';

const TypeFilter = () => {
  return (
    <Accordion.Item value="type">
      <Accordion.Control>Type</Accordion.Control>
      <Accordion.Panel>
        <Checkbox.Group>
          <Stack spacing={10}>
            <Checkbox value="Shirts" label="Shirts" />
            <Checkbox value="Suits" label="Suits" />
            <Checkbox value="Hoodies" label="Hoodies" />
            <Checkbox value="T-Shirts" label="T-Shirts" />
          </Stack>
        </Checkbox.Group>
      </Accordion.Panel>
    </Accordion.Item>
  );
};

export default TypeFilter;
