import { Product } from '@/types';
import { Button, Center, Popover, UnstyledButton } from '@mantine/core';
import React, { useState } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
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
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Popover
        width="target"
        position="bottom"
        shadow="md"
        opened={opened}
        onChange={setOpened}
        transitionProps={{ transition: 'scale-y', duration: 50 }}
        radius={2}
        offset={0}
      >
        <Popover.Target>
          <UnstyledButton
            onClick={() => setOpened((o) => !o)}
            className={styles.control}
          >
            <span className={styles.label}>
              FILTER ({sortedProducts.length}{' '}
              {sortedProducts.length === 1 ? 'ITEM' : 'ITEMS'})
            </span>
            <span
              className={`${styles.chevron} ${opened ? styles.active : ''}`}
            >
              <ChevronDown color="white" />
            </span>
          </UnstyledButton>
        </Popover.Target>
        <Popover.Dropdown p={0}>
          <RemoveScroll>
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
          </RemoveScroll>
        </Popover.Dropdown>
      </Popover>
    </>
  );
};

export default FilterAccordion;
