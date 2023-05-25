import React from 'react';
import classes from './LinkedinTile.module.scss';
import Image from 'next/image';
import LinkedinIcon from '@/assets/icons/linkedin.svg';

const LinkedinTile = () => {
  return (
    <div className={classes.root}>
      <a href="https://www.linkedin.com/in/konradslomiany/" target="_blank">
        <Image src={LinkedinIcon} alt="linkedin icon" />
      </a>
    </div>
  );
};

export default LinkedinTile;
