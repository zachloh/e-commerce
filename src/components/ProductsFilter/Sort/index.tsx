import { Accordion, MediaQuery, Radio, Stack } from '@mantine/core';
import React from 'react';

type SortProps = {
  sortBy: string | null;
  setSortBy: React.Dispatch<React.SetStateAction<string | null>>;
  id: number;
};

const Sort = ({ sortBy, setSortBy, id }: SortProps) => {
  return (
    <MediaQuery largerThan="xs" styles={{ display: 'none' }}>
      <Accordion.Item value="sort">
        <Accordion.Control>Sort</Accordion.Control>
        <Accordion.Panel>
          <Radio.Group
            value={sortBy || undefined}
            onChange={setSortBy}
            name={`sortProductsBy-${id}`}
            aria-label="Sort products by"
          >
            <Stack spacing={10}>
              <Radio value="default" label="Popularity" />
              <Radio value="new" label="New Arrivals" />
              <Radio value="priceAsc" label="Price: Low to High" />
              <Radio value="priceDesc" label="Price: High to Low" />
              <Radio value="brandAsc" label="Brand: A to Z" />
              <Radio value="brandDesc" label="Brand: Z to A" />
            </Stack>
          </Radio.Group>
        </Accordion.Panel>
      </Accordion.Item>
    </MediaQuery>
  );
};

export default Sort;
