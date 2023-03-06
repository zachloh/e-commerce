import { Accordion, Button, Group, NumberInput, Text } from '@mantine/core';
import React, { useState } from 'react';

const PriceFilter = () => {
  const [isPriceError, setIsPriceError] = useState(false);
  const [minPrice, setMinPrice] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');

  const handleChange = (
    value: number | '',
    setValue: React.Dispatch<React.SetStateAction<number | ''>>
  ) => {
    setIsPriceError(false);

    if (typeof value === 'number' && value < 0) {
      setValue(value * -1);
    } else {
      setValue(value);
    }
  };

  const handleClickBtn = () => {
    const min = typeof minPrice === 'number' ? minPrice : 0;
    const max = typeof maxPrice === 'number' ? maxPrice : Infinity;

    if (max < min) {
      setIsPriceError(true);
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
            error={isPriceError}
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
            error={isPriceError}
          />
        </Group>
        {isPriceError && (
          <Text color="red.8" size={14}>
            Minimum price must be less than maximum
          </Text>
        )}
        <Group position="right" mt={15}>
          <Button onClick={handleClickBtn} variant="outline">
            Apply
          </Button>
        </Group>
      </Accordion.Panel>
    </Accordion.Item>
  );
};

export default PriceFilter;
