import { Product } from '@/types';
import { Carousel } from '@mantine/carousel';
import Image from 'next/image';
import React from 'react';
import styles from './ProductImage.module.css';

type ProductImageProps = {
  product: Product;
};

const ProductImage = ({ product }: ProductImageProps) => {
  return (
    <Carousel
      loop
      withIndicators
      className={styles.carousel}
      styles={{
        viewport: {
          height: '100%',
        },
        container: {
          height: '100%',
        },
      }}
    >
      <Carousel.Slide h="100%">
        <div className={styles['image-wrapper']}>
          <Image
            src={product.attributes.image1.data.attributes.url}
            alt={product.attributes.image1.data.attributes.alternativeText}
            fill
            style={{ objectFit: 'cover', objectPosition: '50% 10%' }}
            sizes="(min-width: 1200px) 543px, (min-width: 768px) 50vw, 100vw"
            placeholder="blur"
            blurDataURL={product.attributes.image1.data.attributes.placeholder}
            priority
          />
        </div>
      </Carousel.Slide>
      <Carousel.Slide h="100%">
        <div className={styles['image-wrapper']}>
          <Image
            src={product.attributes.image2.data.attributes.url}
            alt={product.attributes.image2.data.attributes.alternativeText}
            fill
            style={{ objectFit: 'cover', objectPosition: '50% 10%' }}
            sizes="(min-width: 1200px) 543px, (min-width: 768px) 50vw, 100vw"
            placeholder="blur"
            blurDataURL={product.attributes.image2.data.attributes.placeholder}
            priority
          />
        </div>
      </Carousel.Slide>
    </Carousel>
  );
};

export default ProductImage;
