'use client';

import React from 'react';
import Image from 'next/image';
import classes from './Navbar.module.scss';
import ThemeIcon from '@/assets/icons/theme-change.svg';
import { useTheme } from '@/context/ThemeContext';

const Navbar = () => {
  const { setThemeHandler } = useTheme();

  return (
    <nav className={classes.root}>
      <button onClick={setThemeHandler}>
        <Image src={ThemeIcon} alt="theme change icon" />
      </button>
    </nav>
  );
};

export default Navbar;
