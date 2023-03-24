import { useTotalQuantity } from '@/stores/cart';
import { useWishlist } from '@/stores/wishlist';
import {
  ActionIcon,
  Anchor,
  Burger,
  Grid,
  Group,
  Indicator,
  MediaQuery,
  rem,
} from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Heart, ShoppingCart } from 'tabler-icons-react';
import styles from './Header.module.css';

type HeaderProps = {
  opened: boolean;
  onToggleNavbar: () => void;
  onClose: () => void;
};

const Header = ({ opened, onToggleNavbar, onClose }: HeaderProps) => {
  const router = useRouter();
  const currentRoute = router.asPath;
  const { totalQuantity } = useTotalQuantity();
  const { wishlist } = useWishlist();

  return (
    <MediaQuery
      largerThan={768}
      styles={{ paddingLeft: rem(32), paddingRight: rem(32) }}
    >
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
        <Grid.Col span="content" p={0}>
          <Anchor
            component={Link}
            href="/"
            color="white"
            weight={650}
            className={styles.logo}
            onClick={onClose}
          >
            LUXE
          </Anchor>
        </Grid.Col>
        <Grid.Col span="auto" p={0}>
          <Group position="right" className={styles['icons-wrapper']}>
            <ActionIcon
              component={Link}
              href="/wishlist"
              variant="transparent"
              aria-label="Wishlist"
              className={styles.icon}
              onClick={onClose}
            >
              <Indicator
                size={16}
                label={wishlist.length}
                disabled={wishlist.length === 0}
                color="cyan.9"
              >
                <Heart color="white" />
              </Indicator>
            </ActionIcon>
            <ActionIcon
              component={Link}
              href="/cart"
              variant="transparent"
              aria-label="Cart"
              className={styles.icon}
              onClick={onClose}
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
    </MediaQuery>
  );
};

export default Header;
