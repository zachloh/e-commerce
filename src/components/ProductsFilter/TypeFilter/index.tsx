import { Accordion, Checkbox, Stack } from '@mantine/core';
import React from 'react';

type TypeFilterProps = {
  types: string[];
  setTypes: React.Dispatch<React.SetStateAction<string[]>>;
  category: string;
};

const TypeFilter = ({ types, setTypes, category }: TypeFilterProps) => {
  return (
    <Accordion.Item value="type">
      <Accordion.Control>Type</Accordion.Control>
      <Accordion.Panel>
        <Checkbox.Group value={types} onChange={setTypes}>
          <Stack spacing={10}>
            <Checkbox value="Shirts" label="Shirts" />
            {category === 'men' && (
              <>
                <Checkbox value="Suits" label="Suits" />
                <Checkbox value="Hoodies" label="Hoodies" />
                <Checkbox value="T-Shirts" label="T-Shirts" />
              </>
            )}
            {category === 'women' && (
              <>
                <Checkbox value="Tops" label="Tops" />
                <Checkbox value="Jackets" label="Jackets" />
                <Checkbox value="Dresses" label="Dresses" />
              </>
            )}
          </Stack>
        </Checkbox.Group>
      </Accordion.Panel>
    </Accordion.Item>
  );
};

export default TypeFilter;
