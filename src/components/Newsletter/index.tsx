import {
  Container,
  TextInput,
  Text,
  Title,
  Group,
  Button,
} from '@mantine/core';
import { useForm, isEmail } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import React from 'react';
import { Check } from 'tabler-icons-react';

const Newsletter = () => {
  const form = useForm({
    initialValues: {
      email: '',
    },
    validate: {
      email: isEmail('Please enter a valid email'),
    },
  });

  const handleSubmit = () => {
    form.reset();
    notifications.show({
      title: 'Success',
      message: 'Thank you for subscribing!',
      icon: <Check />,
    });
  };

  return (
    <Container size={1000} px={16} mb={80}>
      <Title order={2} size={28} weight={500} mb={10} align="center">
        Keep In Touch
      </Title>
      <Text size={20} align="center" mb={10}>
        Be the first to hear about sales, new arrivals and more.
      </Text>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Group noWrap align="flex-start">
          <TextInput
            w="100%"
            placeholder="Email address"
            aria-label="Email address"
            radius={2}
            size="md"
            {...form.getInputProps('email')}
          />
          <Button radius={2} size="md" color="dark" type="submit">
            SIGN UP
          </Button>
        </Group>
      </form>
    </Container>
  );
};

export default Newsletter;
