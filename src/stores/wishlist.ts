import Wishlist from '@/pages/wishlist';
import { Product } from '@/types';
import { useEffect, useState } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Wishlist = {
  wishlist: Product[];
  removeFromWishList: (id: number) => void;
  toggleWishlist: (newItem: Product) => void;
};

export const useWishlistStore = create<Wishlist>()(
  persist(
    (set) => ({
      wishlist: [],

      removeFromWishList: (id) =>
        set((state) => {
          return {
            wishlist: state.wishlist.filter((item) => item.id !== id),
          };
        }),

      toggleWishlist: (newItem) =>
        set((state) => {
          const itemExists = state.wishlist.find(
            (item) => item.id === newItem.id
          );

          if (itemExists) {
            return {
              wishlist: state.wishlist.filter((item) => item.id !== newItem.id),
            };
          }

          return { wishlist: [...state.wishlist, newItem] };
        }),
    }),
    { name: 'luxe-wishlist' }
  )
);

/*
Workaround to integrate zustand persist with NextJS SSR
https://github.com/pmndrs/zustand/issues/1145
*/
export const useWishlist = () => {
  const initialWishlist = useWishlistStore((state) => state.wishlist);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setWishlist(initialWishlist);
    setIsHydrated(true);
  }, [initialWishlist]);

  return { wishlist, isHydrated };
};
