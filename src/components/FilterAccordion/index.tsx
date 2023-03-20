import { Product } from '@/types';
import { Accordion, Button, Center, MediaQuery } from '@mantine/core';
import React from 'react';
import { ChevronDown } from 'tabler-icons-react';
import styles from './FilterAccordion.module.css';

type FilterAccordionProps = {
  sortedProducts: Product[];
  resetFilter: () => void;
  children: React.ReactNode;
};

const FilterAccordion = ({
  sortedProducts,
  resetFilter,
  children,
}: FilterAccordionProps) => {
  return (
    <MediaQuery largerThan="xs" styles={{ display: 'none' }}>
      <Accordion
        chevron={<ChevronDown color="white" />}
        unstyled
        classNames={{
          control: styles.control,
          label: styles.label,
          chevron: styles.chevron,
        }}
      >
        <Accordion.Item value="filter">
          <Accordion.Control>
            FILTER ({sortedProducts.length}{' '}
            {sortedProducts.length === 1 ? 'ITEM' : 'ITEMS'})
          </Accordion.Control>
          <Accordion.Panel>
            <Center>
              <Button
                variant="subtle"
                color="gray.7"
                onClick={resetFilter}
                my={5}
                styles={{
                  label: {
                    textDecoration: 'underline',
                  },
                }}
              >
                Clear all
              </Button>
            </Center>
            {children}
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </MediaQuery>
  );
};

export default FilterAccordion;
