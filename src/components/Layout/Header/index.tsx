import { useTotalQuantity } from '@/stores/cart';
import {
  ActionIcon,
  Anchor,
  Burger,
  Grid,
  Group,
  Indicator,
  MediaQuery,
} from '@mantine/core';
import { Vollkorn } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Heart, ShoppingCart, Search } from 'tabler-icons-react';
import styles from './Header.module.css';

const vollkorn = Vollkorn({ subsets: ['latin'] });

type HeaderProps = {
  opened: boolean;
  onToggleNavbar: () => void;
  onClose: () => void;
};

const Header = ({ opened, onToggleNavbar, onClose }: HeaderProps) => {
  const router = useRouter();
  const currentRoute = router.asPath;
  const { totalQuantity } = useTotalQuantity();

  return (
    <Grid align="center" mx="auto" h="100%" m={0} px={16} maw={1400}>
      <Grid.Col span="auto" p={0}>
        <MediaQuery smallerThan={768} styles={{ display: 'none' }}>
          <Group spacing={30}>
            <Anchor
              component={Link}
              href="/category/men"
              color="white"
              weight={600}
              className={`${styles.link} ${
                currentRoute === '/category/men' ? styles.active : ''
              }`}
            >
              MEN
            </Anchor>
            <Anchor
              component={Link}
              href="/category/women"
              color="white"
              weight={600}
              className={`${styles.link} ${
                currentRoute === '/category/women' ? styles.active : ''
              }`}
            >
              WOMEN
            </Anchor>
          </Group>
        </MediaQuery>
        <MediaQuery largerThan={768} styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={onToggleNavbar}
            size="sm"
            color="white"
            aria-label="Open navigation"
          />
        </MediaQuery>
      </Grid.Col>
      <Grid.Col span="content" p={0} pt={5}>
        <Anchor
          component={Link}
          href="/"
          color="white"
          ff={vollkorn.style.fontFamily}
          weight={700}
          className={styles.logo}
        >
          LUXE
        </Anchor>
      </Grid.Col>
      <Grid.Col span="auto" p={0}>
        <Group position="right" spacing={16}>
          <MediaQuery smallerThan={600} styles={{ display: 'none' }}>
            <ActionIcon
              component={Link}
              href="/"
              variant="transparent"
              aria-label="Search"
              className={styles.icon}
            >
              <Search color="white" />
            </ActionIcon>
          </MediaQuery>
          <MediaQuery smallerThan={600} styles={{ display: 'none' }}>
            <ActionIcon
              component={Link}
              href="/"
              variant="transparent"
              aria-label="Wishlist"
              className={styles.icon}
            >
              <Heart color="white" />
            </ActionIcon>
          </MediaQuery>
          <ActionIcon
            component={Link}
            href="/cart"
            variant="transparent"
            aria-label="Cart"
            className={styles.icon}
          >
            <Indicator
              size={16}
              label={totalQuantity}
              disabled={totalQuantity === 0}
              color="cyan.9"
            >
              <ShoppingCart color="white" />
            </Indicator>
          </ActionIcon>
        </Group>
      </Grid.Col>
    </Grid>
  );
};

export default Header;
