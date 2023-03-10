import { customAxios } from '@/lib/axios';
import { Product, StrapiResponse } from '@/types';

export const getProductsByCategory = async (category: string) => {
  const { data } = await customAxios.get<StrapiResponse<Product[]>>(
    `/products?populate=*&filters[category][title][$eq]=${category}`
  );
  return data;
};
