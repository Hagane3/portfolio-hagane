import React from 'react';
import classes from './GithubTile.module.scss';
import Image from 'next/image';
import GithubIcon from '@/assets/icons/github.svg';

const GithubTile = () => {
  return (
    <div className={classes.root}>
      <a href="https://github.com/Hagane3" target="_blank">
        <Image src={GithubIcon} alt="github icon" />
      </a>
    </div>
  );
};

export default GithubTile;
