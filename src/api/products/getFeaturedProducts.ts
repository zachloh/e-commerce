import { customAxios } from '@/lib/axios';
import { Product, StrapiResponse } from '@/types';

export const getFeaturedProducts = async () => {
  const { data } = await customAxios.get<StrapiResponse<Product[]>>(
    '/products?populate=*&filters[feature][$eq]=featured'
  );
  return data;
};
