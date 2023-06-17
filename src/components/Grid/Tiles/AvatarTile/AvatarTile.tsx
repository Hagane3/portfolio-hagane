import React from 'react';

import classes from './AvatarTile.module.scss';
import Image from 'next/image';
import avatarOk from '@/assets/images/avatar-ok.webp';

const SpotifyTile = () => {
  return (
    <div className={classes.root}>
      <Image src={avatarOk} alt="avatar with macbook" />
    </div>
  );
};

export default SpotifyTile;
