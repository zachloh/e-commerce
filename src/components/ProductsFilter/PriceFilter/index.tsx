import { Accordion, Group, NumberInput, Text } from '@mantine/core';
import React from 'react';

type PriceFilterProps = {
  minPrice: number | '';
  setMinPrice: React.Dispatch<React.SetStateAction<number | ''>>;
  maxPrice: number | '';
  setMaxPrice: React.Dispatch<React.SetStateAction<number | ''>>;
};

const PriceFilter = ({
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}: PriceFilterProps) => {
  const handleChange = (
    value: number | '',
    setValue: React.Dispatch<React.SetStateAction<number | ''>>
  ) => {
    if (typeof value === 'number' && value < 0) {
      setValue(value * -1);
    } else {
      setValue(value);
    }
  };

  return (
    <Accordion.Item value="price">
      <Accordion.Control>Price</Accordion.Control>
      <Accordion.Panel>
        <Group noWrap spacing={32}>
          <NumberInput
            label="Min"
            placeholder="0"
            min={0}
            hideControls
            icon={<Text size={14}>$</Text>}
            iconWidth={24}
            value={minPrice}
            onChange={(v) => handleChange(v, setMinPrice)}
          />
          <NumberInput
            label="Max"
            placeholder="Any"
            min={0}
            hideControls
            icon={<Text size={14}>$</Text>}
            iconWidth={24}
            value={maxPrice}
            onChange={(v) => handleChange(v, setMaxPrice)}
          />
        </Group>
      </Accordion.Panel>
    </Accordion.Item>
  );
};

export default PriceFilter;
