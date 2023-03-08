import { Product } from '@/types';

export const sortProducts = (products: Product[], sortBy: string | null) => {
  switch (sortBy) {
    case 'default':
      return products;

    case 'new':
      return [...products].sort((a, b) => {
        return a.attributes.isNew === b.attributes.isNew
          ? 0
          : a.attributes.isNew
          ? -1
          : 1;
      });

    case 'priceAsc':
      return [...products].sort((a, b) => {
        return a.attributes.price - b.attributes.price;
      });

    case 'priceDesc':
      return [...products].sort((a, b) => {
        return b.attributes.price - a.attributes.price;
      });

    case 'brandAsc':
      return [...products].sort((a, b) => {
        return a.attributes.brand.data.attributes.title.localeCompare(
          b.attributes.brand.data.attributes.title
        );
      });

    case 'brandDesc':
      return [...products].sort((a, b) => {
        return b.attributes.brand.data.attributes.title.localeCompare(
          a.attributes.brand.data.attributes.title
        );
      });

    default:
      return products;
  }
};
