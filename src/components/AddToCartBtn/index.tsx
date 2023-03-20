import { Button } from '@mantine/core';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FaBox } from 'react-icons/fa';
import styles from './AddToCartBtn.module.css';

type AddToCartBtnProps = {
  height: number;
  size: string;
  addedToCart: boolean;
  handleAddToCart: () => void;
};

const AddToCartBtn = ({
  height,
  size,
  addedToCart,
  handleAddToCart,
}: AddToCartBtnProps) => {
  return (
    <Button
      h={height}
      radius={2}
      w="100%"
      size={size}
      onClick={handleAddToCart}
      disabled={addedToCart}
      styles={(theme) => ({
        root: {
          '&:disabled, &[data-disabled]': {
            backgroundColor: theme.colors.cyan[6],
            color: 'white',
          },
        },
      })}
      className={`${styles['cart-btn']} ${addedToCart ? styles.added : ''}`}
      aria-label="Add to cart"
    >
      <FaShoppingCart className={styles.cart} />
      <FaBox className={styles.box} />
      <span className={styles['cart-text']}>ADD TO CART</span>
    </Button>
  );
};

export default AddToCartBtn;
