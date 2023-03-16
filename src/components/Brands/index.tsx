import { Card, Container, Group, Title } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import countryRoad from '../../../public/images/country-road.png';
import gant from '../../../public/images/gant.png';
import levis from '../../../public/images/levis.png';
import polo from '../../../public/images/polo.png';
import vans from '../../../public/images/vans.png';
import styles from './Brands.module.css';

const brands = [
  {
    src: countryRoad,
    alt: 'Country Road logo',
  },
  {
    src: gant,
    alt: 'Gant logo',
  },
  {
    src: levis,
    alt: "Levi's logo",
  },
  {
    src: vans,
    alt: 'Vans logo',
  },
  {
    src: polo,
    alt: 'Polo Ralph Lauren logo',
  },
];

const Brands = () => {
  return (
    <Container size={1200} px={16} mb={80}>
      <Title order={2} size={28} weight={500} mb={10} align="center">
        Our Trusted Partners
      </Title>
      <Group position="center" spacing={30}>
        {brands.map((brand, index) => (
          <Card key={index} bg="gray.0">
            <div className={styles['image-wrapper']}>
              <Image
                src={brand.src}
                alt={brand.alt}
                fill
                placeholder="blur"
                style={{ objectFit: 'contain' }}
                // TODO: Add sizes
              />
            </div>
          </Card>
        ))}
      </Group>
    </Container>
  );
};

export default Brands;
