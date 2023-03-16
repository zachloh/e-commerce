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
          style={{ objectFit: 'cover', objectPosition: '50% 30%' }}
        />
      </div>
      <div className={styles['hero-content']}>
        <Text
          size={64}
          color="white"
          weight={600}
          mt={180}
          mb={30}
          align="center"
          className={styles.text}
        >
          Better when it&apos;s on you.
        </Text>
        <Text
          size={24}
          color="white"
          weight={600}
          mb={50}
          maw={500}
          align="center"
          className={styles.text}
        >
          Refresh your style with on-trend pieces from our collection.
        </Text>
        <Group spacing={30} position="center">
          <Button
            variant="default"
            size="md"
            radius={0}
            h={50}
            component={Link}
            href="/category/men"
          >
            SHOP MEN
          </Button>
          <Button
            variant="default"
            size="md"
            radius={0}
            h={50}
            component={Link}
            href="/category/women"
          >
            SHOP WOMEN
          </Button>
        </Group>
      </div>
    </div>
  );
};

export default Hero;
