import React from 'react';
import classes from './Grid.module.scss';
import SpotifyTile from './Tiles/SpotifyTile/SpotifyTile';
import GithubTile from './Tiles/GithubTile/GithubTile';
import AboutTile from './Tiles/AboutTile/AboutTile';
import LinkedinTile from './Tiles/LinkedinTile/LinkedinTile';
import DiscordTile from './Tiles/DiscordTile/DiscordTile';
import CommunityTile from './Tiles/CommunityTile/CommunityTile';

const Grid = () => {
  return (
    <section className={classes.root}>
      <SpotifyTile />
      <GithubTile />
      <AboutTile />
      <LinkedinTile />
      <DiscordTile />
      <CommunityTile />
    </section>
  );
};

export default Grid;
