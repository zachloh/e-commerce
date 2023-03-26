import { Product } from '@/types';
import { useEffect, useState } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CartItem = Product & {
  quantity: number;
  size: string;
};

type Cart = {
  cart: CartItem[];
  addToCart: (newItem: Product, size: string) => void;
  increment: (id: number, size: string) => void;
  decrement: (id: number, size: string) => void;
  removeFromCart: (id: number, size: string) => void;
  resetCart: () => void;
};

export const useCartStore = create<Cart>()(
  persist(
    (set) => ({
      cart: [],

      addToCart: (newItem, size) =>
        set((state) => {
          const cartIndex = state.cart.findIndex(
            (item) => item.id === newItem.id && item.size === size
          );

          if (cartIndex < 0) {
            return {
              cart: [...state.cart, { ...newItem, quantity: 1, size }],
            };
          }

          const newCart = state.cart.map((item, index) => {
            if (index === cartIndex) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          });

          return {
            cart: newCart,
          };
        }),

      increment: (id, size) =>
        set((state) => {
          const newCart = state.cart.map((item) => {
            if (item.id === id && item.size === size) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          });

          return {
            cart: newCart,
          };
        }),

      decrement: (id, size) =>
        set((state) => {
          const cartItem = state.cart.find(
            (item) => item.id === id && item.size === size
          );

          if (cartItem?.quantity && cartItem?.quantity > 1) {
            const newCart = state.cart.map((item) => {
              if (item.id === id && item.size === size) {
                return {
                  ...item,
                  quantity: item.quantity - 1,
                };
              }

              return item;
            });

            return {
              cart: newCart,
            };
          }

          const filteredCart = state.cart.filter((item) => {
            if (item.id === id && item.size === size) {
              return false;
            }
            return true;
          });
          return {
            cart: filteredCart,
          };
        }),

      removeFromCart: (id, size) =>
        set((state) => {
          return {
            cart: state.cart.filter((item) => {
              if (item.id === id && item.size === size) {
                return false;
              }
              return true;
            }),
          };
        }),

      resetCart: () =>
        set(() => {
          return {
            cart: [],
          };
        }),
    }),
    { name: 'luxe-cart' }
  )
);

/*
Workaround to integrate zustand persist with NextJS SSR
https://github.com/pmndrs/zustand/issues/1145
*/
export const useCart = () => {
  const initialCart = useCartStore((state) => state.cart);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setCart(initialCart);
    setIsHydrated(true);
  }, [initialCart]);

  return { cart, isHydrated };
};

export const useTotalQuantity = () => {
  const cart = useCartStore((state) => state.cart);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setTotalQuantity(cart.reduce((prev, cur) => prev + cur.quantity, 0));
    setIsHydrated(true);
  }, [cart]);

  return { totalQuantity, isHydrated };
};

export const useTotalPrice = () => {
  const cart = useCartStore((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setTotalPrice(
      cart.reduce((prev, cur) => prev + cur.quantity * cur.attributes.price, 0)
    );
    setIsHydrated(true);
  }, [cart]);

  return { totalPrice, isHydrated };
};
