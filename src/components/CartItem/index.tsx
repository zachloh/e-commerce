import { CartItem, useCartStore } from '@/stores/cart';
import {
  ActionIcon,
  Anchor,
  Divider,
  Grid,
  Group,
  NumberInput,
  NumberInputHandlers,
  Stack,
  Text,
} from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { Minus, Plus, X } from 'tabler-icons-react';
import styles from './CartItem.module.css';

type CartItemProps = {
  item: CartItem;
};

const CartItem = ({ item }: CartItemProps) => {
  const [quantity, setQuantity] = useState<number | ''>(item.quantity);
  const handlers = useRef<NumberInputHandlers>();

  const increment = useCartStore((state) => state.increment);
  const decrement = useCartStore((state) => state.decrement);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const handleIncrement = () => {
    handlers.current?.increment();
    increment(item.id, item.size);
  };

  const handleDecrement = () => {
    handlers.current?.decrement();
    decrement(item.id, item.size);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(item.id, item.size);
  };

  return (
    <>
      <Grid m={0} gutterXs={30}>
        <Grid.Col span={4} p={0}>
          <Anchor
            component={Link}
            href={`/product/${item.id}`}
            sx={{ display: 'block' }}
          >
            <div className={styles['image-wrapper']}>
              <Image
                src={item.attributes.image1.data.attributes.url}
                alt={item.attributes.image1.data.attributes.alternativeText}
                fill
                style={{ objectFit: 'cover', objectPosition: '50% 10%' }}
                // TODO: Set sizes
                sizes="25vw"
                placeholder="blur"
                blurDataURL={item.attributes.image1.data.attributes.placeholder}
              />
            </div>
          </Anchor>
        </Grid.Col>
        <Grid.Col span={8} p={0}>
          <Stack justify="space-between" h="100%">
            <div>
              <Group position="apart" w="100%">
                <Anchor
                  component={Link}
                  href={`/product/${item.id}`}
                  color="dark"
                >
                  <Text weight={600}>{item.attributes.title}</Text>
                </Anchor>
                <ActionIcon onClick={handleRemoveFromCart}>
                  <X color="#000" />
                </ActionIcon>
              </Group>
              <Text my={6}>{item.attributes.brand.data.attributes.title}</Text>
              <Text>Size: {item.size}</Text>
            </div>
            <div>
              <Text weight={600} mb={10}>
                ${item.attributes.price}.00
              </Text>
              <Group position="apart">
                <Group spacing={5}>
                  <ActionIcon
                    size={38}
                    variant="default"
                    onClick={handleDecrement}
                  >
                    <Minus size={16} />
                  </ActionIcon>
                  <NumberInput
                    hideControls
                    value={quantity}
                    onChange={(val) => setQuantity(val)}
                    handlersRef={handlers}
                    min={0}
                    step={1}
                    h={38}
                    styles={{
                      input: {
                        width: 54,
                        height: '100%',
                        textAlign: 'center',
                      },
                      wrapper: { height: '100%' },
                    }}
                    aria-label="Quantity"
                    readOnly
                  />
                  <ActionIcon
                    size={38}
                    variant="default"
                    onClick={handleIncrement}
                  >
                    <Plus size={16} />
                  </ActionIcon>
                </Group>
                <Text weight={600}>
                  TOTAL: ${Number(quantity) * item.attributes.price}.00
                </Text>
              </Group>
            </div>
          </Stack>
        </Grid.Col>
      </Grid>
      <Divider my={30} />
    </>
  );
};

export default CartItem;
