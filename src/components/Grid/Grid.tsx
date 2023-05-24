import React from 'react';
import classes from './Grid.module.scss';
import SpotifyTile from './Tiles/SpotifyTile/SpotifyTile';
import GithubTile from './Tiles/GithubTile/GithubTile';

const Grid = () => {
  return (
    <section className={classes.root}>
      <SpotifyTile />
      <GithubTile />
    </section>
  );
};

export default Grid;
