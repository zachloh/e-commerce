import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import React from 'react';
import { Montserrat } from 'next/font/google';

type AppProvidersProps = {
  children: React.ReactNode;
};

const montserrat = Montserrat({ subsets: ['latin'] });

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <MantineProvider
        theme={{
          fontFamily: montserrat.style.fontFamily,
          primaryColor: 'cyan',
          components: {
            Select: {
              styles: (theme) => ({
                item: {
                  '&[data-selected]': {
                    '&, &:hover': {
                      backgroundColor: theme.colors.cyan[0],
                      color: 'inherit',
                    },
                  },
                },
              }),
            },
            Checkbox: {
              styles: {
                input: {
                  cursor: 'pointer',
                },
                labelWrapper: {
                  cursor: 'pointer',
                },
                label: {
                  cursor: 'pointer',
                },
              },
            },
            Accordion: {
              styles: (theme) => ({
                label: {
                  fontWeight: 500,
                  color: theme.colors.dark[3],
                },
              }),
            },
          },
        }}
        withCSSVariables
      >
        <Notifications position="bottom-center" />
        {children}
      </MantineProvider>
    </>
  );
};

export default AppProviders;
