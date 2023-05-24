import React from 'react';
import classes from './Grid.module.scss';
import SpotifyTile from './Tiles/SpotifyTile/SpotifyTile';
import GithubTile from './Tiles/GithubTile/GithubTile';
import AboutTile from './Tiles/AboutTile/AboutTile';

const Grid = () => {
  return (
    <section className={classes.root}>
      <SpotifyTile />
      <GithubTile />
      <AboutTile />
    </section>
  );
};

export default Grid;
