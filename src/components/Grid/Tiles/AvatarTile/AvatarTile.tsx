'use client';

import React from 'react';
import { useState } from 'react';

import classes from './AvatarTile.module.scss';
import Image from 'next/image';
import avatarOk from '@/assets/images/avatar-ok.webp';

const SpotifyTile = () => {
  const [isBubbleVisible, setIsBubbleVisible] = useState(true);

  const toggleBubble = () => {
    setIsBubbleVisible((prevState) => !prevState);
  };

  return (
    <div className={classes.root}>
      <Image src={avatarOk} alt="avatar with macbook" onClick={toggleBubble} />
      <p className={classes.chatBubble}>Let's create something!</p>
    </div>
  );
};

export default SpotifyTile;
