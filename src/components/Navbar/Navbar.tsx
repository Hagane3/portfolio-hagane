'use client';

import React from 'react';
import Image from 'next/image';
import classes from './Navbar.module.scss';
import ThemeIcon from '@/assets/icons/theme-change.svg';
import BackIcon from '@/assets/icons/left-arrow.svg';
import { useTheme } from '@/context/ThemeContext';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const { setThemeHandler } = useTheme();
  const pathname = usePathname();

  return (
    <nav className={classes.root}>
      <div className={classes.container}>
        <button onClick={setThemeHandler}>
          <Image src={ThemeIcon} alt="theme change icon" />
        </button>
        {pathname !== '/' && (
          <Link className={classes.backIcon} href="#">
            <Image src={BackIcon} alt="back icon" />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
