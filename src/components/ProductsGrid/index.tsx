import { Product } from '@/types';
import React from 'react';
import ProductCard from './ProductCard';
import styles from './ProductsGrid.module.css';

type ProductsGridProps = {
  products: Product[];
};

const ProductsGrid = ({ products }: ProductsGridProps) => {
  // TODO: Change to use Grid

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
