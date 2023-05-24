import React from 'react';
import classes from './DiscordTile.module.scss';
import Image from 'next/image';
import DiscordIcon from '@/assets/icons/discord.svg';

const DiscordTile = () => {
  return (
    <div className={classes.root}>
      <Image src={DiscordIcon} alt="discord icon" />
    </div>
  );
};

export default DiscordTile;
