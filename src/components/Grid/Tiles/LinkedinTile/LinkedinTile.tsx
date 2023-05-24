import React from 'react';
import classes from './LinkedinTile.module.scss';
import Image from 'next/image';
import LinkedinIcon from '@/assets/icons/linkedin.svg';

const LinkedinTile = () => {
  return (
    <div className={classes.root}>
      <Image src={LinkedinIcon} alt="linkedin icon" />
    </div>
  );
};

export default LinkedinTile;
