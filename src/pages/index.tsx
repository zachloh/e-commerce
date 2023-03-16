import { InferGetStaticPropsType } from 'next';
import { getFeaturedProducts } from '@/api/products/getFeaturedProducts';
import Brands from '@/components/Brands';
import FeaturedProducts from '@/components/FeaturedProducts';
import Hero from '@/components/Hero';
import NewArrivals from '@/components/NewArrivals';
import Newsletter from '@/components/Newsletter';

export const getStaticProps = async () => {
  const response = await getFeaturedProducts();
  return {
    props: {
      products: response.data.slice(0, 4),
    },
  };
};

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Hero />
      <NewArrivals />
      <FeaturedProducts products={products} />
      <Brands />
      <Newsletter />
    </>
  );
}
