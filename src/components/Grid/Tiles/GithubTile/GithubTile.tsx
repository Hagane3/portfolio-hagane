import React from 'react';
import classes from './GithubTile.module.scss';
import Image from 'next/image';
import GithubIcon from '@/assets/icons/github.svg';

const GithubTile = () => {
  return (
    <div className={classes.root}>
      <Image src={GithubIcon} alt="github icon" />
    </div>
  );
};

export default GithubTile;
