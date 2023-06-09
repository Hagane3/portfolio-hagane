import React from 'react';
import classes from './Grid.module.scss';
import AvatarTile from './Tiles/AvatarTile/AvatarTile';

import AboutTile from './Tiles/AboutTile/AboutTile';
import CommunityTile from './Tiles/CommunityTile/CommunityTile';

import GithubIcon from '@/assets/icons/github.svg';
import DiscordIcon from '@/assets/icons/discord.svg';
import LinkedinIcon from '@/assets/icons/linkedin.svg';

import Tile from '../UI/Tile/Tile';
import Image from 'next/image';

const Grid = () => {
  return (
    <section className={classes.root}>
      <Tile href="https://github.com/Hagane3" color="#777777">
        <Image src={GithubIcon} alt="github icon" />
      </Tile>

      <Tile href="https://www.linkedin.com/in/konradslomiany/" color="#0e76a8">
        <Image src={LinkedinIcon} alt="linkedin icon" />
      </Tile>

      <AboutTile />
      <AvatarTile />
      <Tile href="https://discord.gg/CAUWFXBb" color="#7289da">
        <Image src={DiscordIcon} alt="discord icon" />
      </Tile>

      <CommunityTile />
    </section>
  );
};

export default Grid;
