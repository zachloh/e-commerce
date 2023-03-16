import { AppShell, Box, Header, Navbar } from '@mantine/core';
import React, { useState } from 'react';
import HeaderContent from './Header';
import NavbarContent from './Navbar';
import Footer from './Footer';
import styles from './Layout.module.css';

type LayoutProps = {
  children: React.ReactNode;
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
          opened ? (
            <Navbar hiddenBreakpoint="sm" hidden={!opened}>
              <NavbarContent />
            </Navbar>
          ) : undefined
        }
      >
        {/* TODO: Fix position */}
        <Box bg="gray.2" h={45} p={16}>
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
