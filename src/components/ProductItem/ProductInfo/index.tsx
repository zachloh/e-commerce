import { useCartStore } from '@/stores/cart';
import { Product } from '@/types';
import { ActionIcon, Button, Group, Select, Text, Title } from '@mantine/core';
import React, { useState } from 'react';
import { ChevronDown, Heart } from 'tabler-icons-react';

type ProductInfoProps = {
  product: Product;
};

const ProductInfo = ({ product }: ProductInfoProps) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const [size, setSize] = useState<string | null>(null);
  const [error, setError] = useState(false);

  const handleAddToCart = () => {
    if (size === null) {
      setError(true);
      return;
    }
    addToCart(product, size);
  };

  return (
    <>
      <Title order={1} size={20} weight={500} mb={20}>
        {product.attributes.title}
      </Title>
      <Text mb={20}>{product.attributes.brand.data.attributes.title}</Text>
      <Text weight={500} mb={20}>
        ${product.attributes.price}.00
      </Text>
      <Select
        placeholder="Pick a size"
        data={product.attributes.sizes}
        size="md"
        mb={20}
        radius={2}
        rightSection={<ChevronDown size={20} color="#22B8CF" />}
        styles={{ rightSection: { pointerEvents: 'none' } }}
        aria-label="Pick a size"
        value={size}
        onChange={setSize}
        error={error ? 'Please pick a size' : false}
      />
      <Group noWrap mb={20}>
        <Button h={50} radius={2} w="100%" size="md" onClick={handleAddToCart}>
          ADD TO CART
        </Button>
        <ActionIcon variant="outline" size={50} color="cyan" radius={2}>
          <Heart size={26} />
        </ActionIcon>
      </Group>
      <Text weight={600} size={15}>
        Material
      </Text>
      <Text size={14} color="dark.3" mb={20}>
        {/* TODO: Add material in strapi */}
        100% Cotton
      </Text>
      <Text weight={600} size={15}>
        Care
      </Text>
      <Text size={14} color="dark.3" mb={20}>
        Refer to product for care instructions.
      </Text>
      <Text weight={600} size={15}>
        Delivery
      </Text>
      <Text size={14} color="dark.3" mb={20}>
        This item is sent directly from our partner and will arrive separately
        if ordered with other items.
      </Text>
      <Text weight={600} size={15}>
        Returns
      </Text>
      <Text size={14} color="dark.3">
        Free returns within 30 days.
      </Text>
    </>
  );
};

export default ProductInfo;
