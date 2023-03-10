import { customAxios } from '@/lib/axios';
import { Product, StrapiResponse } from '@/types';

export const getAllProducts = async () => {
  const { data } = await customAxios.get<StrapiResponse<Product[]>>(
    '/products'
  );
  return data;
};
