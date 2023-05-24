import React from 'react';
import classes from './Grid.module.scss';
import SpotifyTile from './Tiles/SpotifyTile/SpotifyTile';
import GithubTile from './Tiles/GithubTile/GithubTile';
import AboutTile from './Tiles/AboutTile/AboutTile';
import LinkedinTile from './Tiles/LinkedinTile/LinkedinTile';
import DiscordTile from './Tiles/DiscordTile/DiscordTile';

const Grid = () => {
  return (
    <section className={classes.root}>
      <SpotifyTile />
      <GithubTile />
      <AboutTile />
      <LinkedinTile />
      <DiscordTile />
    </section>
  );
};

export default Grid;
