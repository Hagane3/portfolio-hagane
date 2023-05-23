import React from 'react';
import Image from 'next/image';
import classes from './Navbar.module.scss';
import ThemeIcon from '@/assets/icons/theme-change.svg';

const Navbar = () => {
  return (
    <nav className={classes.root}>
      <button>
        <Image src={ThemeIcon} alt="theme change icon" />
      </button>
    </nav>
  );
};

export default Navbar;
