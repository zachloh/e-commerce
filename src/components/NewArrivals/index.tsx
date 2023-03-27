import React from 'react';
import newArrivals from '../../../public/images/new-arrivals.jpg';
import Image from 'next/image';
import { Button, Group, Text } from '@mantine/core';
import Link from 'next/link';
import styles from './NewArrivals.module.css';

const NewArrivals = () => {
  return (
    <div className={styles.container}>
      <div className={styles['image-wrapper']}>
        <Image
          src={newArrivals}
          alt="clothes hanging on a rack"
          fill
          placeholder="blur"
          style={{ objectFit: 'cover' }}
          sizes="(min-width: 1200px) 1200px, 100vw"
        />
      </div>
      <div className={styles.content}>
        <Text size={48} color="white" weight={600} className={styles.text}>
          New Arrivals
        </Text>
        <Group className={styles.links} pb={30} position="center">
          <Button
            variant="default"
            size="md"
            radius={0}
            h={50}
            component={Link}
            href="/category/men?filter=new"
            as="/category/men"
            className={styles.button}
          >
            SHOP MEN
          </Button>
          <Button
            variant="default"
            size="md"
            radius={0}
            h={50}
            component={Link}
            href="/category/women?filter=new"
            as="/category/women"
            className={styles.button}
          >
            SHOP WOMEN
          </Button>
        </Group>
      </div>
    </div>
  );
};

export default NewArrivals;
