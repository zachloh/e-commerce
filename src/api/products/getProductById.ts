import { customAxios } from '@/lib/axios';
import { Product, StrapiResponse } from '@/types';

export const getProductById = async (id: string) => {
  const { data } = await customAxios.get<StrapiResponse<Product>>(
    `/products/${id}?populate=*`
  );
  return data;
};
