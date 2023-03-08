import { Accordion, Checkbox, Stack } from '@mantine/core';
import React from 'react';

type TypeFilterProps = {
  types: string[];
  setTypes: React.Dispatch<React.SetStateAction<string[]>>;
};

const TypeFilter = ({ types, setTypes }: TypeFilterProps) => {
  return (
    <Accordion.Item value="type">
      <Accordion.Control>Type</Accordion.Control>
      <Accordion.Panel>
        <Checkbox.Group value={types} onChange={setTypes}>
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
