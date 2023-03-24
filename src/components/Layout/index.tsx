import { AppShell, Box, Header, Navbar, Transition } from '@mantine/core';
import React, { useState } from 'react';
import HeaderContent from './Header';
import NavbarContent from './Navbar';
import Footer from './Footer';
import styles from './Layout.module.css';

type LayoutProps = {
  children: React.ReactNode;
};

const slideRight = {
  in: { transform: 'translateX(0)' },
  out: { transform: 'translateX(-100%)' },
  common: { transformOrigin: 'right' },
  transitionProperty: 'transform',
};

const Layout = ({ children }: LayoutProps) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <AppShell
        padding={0}
        header={
          <Header height={70} bg="dark.6" sx={{ borderBottom: 'none' }}>
            <HeaderContent
              opened={opened}
              onToggleNavbar={() => setOpened((o) => !o)}
              onClose={() => setOpened(false)}
            />
          </Header>
        }
        navbar={
          <Transition
            mounted={opened}
            transition={slideRight}
            duration={300}
            exitDuration={300}
            timingFunction="ease-in-out"
          >
            {(styles) => (
              <Navbar hiddenBreakpoint="sm" p={10} style={styles}>
                <NavbarContent onClose={() => setOpened(false)} />
              </Navbar>
            )}
          </Transition>
        }
      >
        <Box bg="gray.2" h={45} p={16} className={styles.sticky}>
          <div className={styles['features-wrapper']}>
            <p className={styles.feature}>FREE SHIPPING</p>
            <p className={styles.feature}>FAST DELIVERY</p>
            <p className={styles.feature}>FREE RETURNS</p>
          </div>
        </Box>
        {children}
      </AppShell>
      <Footer />
    </>
  );
};

export default Layout;
