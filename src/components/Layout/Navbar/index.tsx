import { NavLink } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { RemoveScroll } from 'react-remove-scroll';

type NavbarProps = {
  onClose: () => void;
};

const Navbar = ({ onClose }: NavbarProps) => {
  const router = useRouter();
  const currentRoute = router.asPath;

  return (
    <>
      <RemoveScroll>
        <NavLink
          label="Men"
          component={Link}
          href="/category/men"
          onClick={onClose}
          active={currentRoute === '/category/men'}
          color="cyan.9"
          mb={5}
        />
        <NavLink
          label="Women"
          component={Link}
          href="/category/women"
          onClick={onClose}
          active={currentRoute === '/category/women'}
          color="cyan.9"
        />
      </RemoveScroll>
    </>
  );
};

export default Navbar;
