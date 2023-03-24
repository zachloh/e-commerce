import {
  Container,
  TextInput,
  Text,
  Title,
  Group,
  Button,
  MediaQuery,
  rem,
} from '@mantine/core';
import { useForm, isEmail } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import React from 'react';
import { Check } from 'tabler-icons-react';
import styles from './Newsletter.module.css';

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
    <MediaQuery
      largerThan={768}
      styles={{ paddingLeft: rem(32), paddingRight: rem(32) }}
    >
      <Container size={1000} px={16} mb={80}>
        <Title
          order={2}
          weight={500}
          mb={10}
          align="center"
          className={styles.title}
        >
          Keep In Touch
        </Title>
        <Text size={20} align="center" mb={10} className={styles.text}>
          Be the first to hear about sales, new arrivals and more.
        </Text>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Group noWrap align="flex-start" spacing={5}>
            <TextInput
              w="100%"
              placeholder="Email"
              aria-label="Email address"
              radius={2}
              size="md"
              {...form.getInputProps('email')}
              classNames={{
                input: styles.input,
              }}
            />
            <Button
              radius={2}
              size="md"
              color="dark"
              type="submit"
              classNames={{
                root: styles.button,
                label: styles.input,
              }}
            >
              SIGN UP
            </Button>
          </Group>
        </form>
      </Container>
    </MediaQuery>
  );
};

export default Newsletter;
