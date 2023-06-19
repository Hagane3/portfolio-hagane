import React from 'react';

import classes from './AvatarTile.module.scss';
import Image from 'next/image';
import avatarOk from '@/assets/images/avatar-ok.webp';

const SpotifyTile = () => {
  return (
    <div className={classes.root}>
      <Image src={avatarOk} alt="avatar with macbook" />
      <p className={classes.chatBubble}>Let&apos;s create something!</p>
    </div>
  );
};

export default SpotifyTile;
