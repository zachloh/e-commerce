import { Button, Group, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import hero from '../../../public/images/hero.jpg';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles['hero-wrapper']}>
      <div className={styles['image-wrapper']}>
        <Image
          priority
          src={hero}
          alt="young couple posing in warm winter outfit"
          fill
          placeholder="blur"
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: '50% 30%' }}
        />
      </div>
      <div className={styles['hero-content']}>
        <Text
          color="white"
          weight={600}
          align="center"
          className={`${styles.text} ${styles.primary}`}
        >
          Better when it&apos;s on you.
        </Text>
        <Text
          color="white"
          weight={600}
          maw={500}
          align="center"
          className={`${styles.text} ${styles.secondary}`}
        >
          Refresh your style with on-trend pieces from our collection.
        </Text>
        <Group position="center" className={styles['buttons-container']}>
          <Button
            variant="default"
            radius={0}
            component={Link}
            href="/category/men"
            className={styles.button}
          >
            SHOP MEN
          </Button>
          <Button
            variant="default"
            radius={0}
            component={Link}
            href="/category/women"
            className={styles.button}
          >
            SHOP WOMEN
          </Button>
        </Group>
      </div>
    </div>
  );
};

export default Hero;
