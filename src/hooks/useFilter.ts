import { useDebouncedValue } from '@mantine/hooks';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const useFilter = () => {
  const { query } = useRouter();

  const [types, setTypes] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');
  const [isNew, setIsNew] = useState(query.filter === 'new');
  const [sizes, setSizes] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);

  const [debouncedTypes] = useDebouncedValue(types, 300);
  const [debouncedMinPrice] = useDebouncedValue(minPrice, 500);
  const [debouncedMaxPrice] = useDebouncedValue(maxPrice, 500);
  const [debouncedIsNew] = useDebouncedValue(isNew, 300);
  const [debouncedSizes] = useDebouncedValue(sizes, 300);
  const [debouncedBrands] = useDebouncedValue(brands, 300);

  const filter = {
    types,
    price: {
      minPrice,
      maxPrice,
    },
    isNew,
    sizes,
    brands,
  };

  const debouncedFilter = {
    types: debouncedTypes,
    price: {
      minPrice: debouncedMinPrice,
      maxPrice: debouncedMaxPrice,
    },
    isNew: debouncedIsNew,
    sizes: debouncedSizes,
    brands: debouncedBrands,
  };

  const setFilter = {
    setTypes,
    setMinPrice,
    setMaxPrice,
    setIsNew,
    setSizes,
    setBrands,
  };

  const resetFilter = () => {
    setTypes([]);
    setMinPrice('');
    setMaxPrice('');
    setIsNew(false);
    setSizes([]);
    setBrands([]);
  };

  return { filter, debouncedFilter, setFilter, resetFilter };
};
