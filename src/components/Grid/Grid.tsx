import React from 'react';
import classes from './Grid.module.scss';
import SpotifyTile from './Tiles/SpotifyTile/SpotifyTile';

const Grid = () => {
  return (
    <section className={classes.root}>
      <SpotifyTile />
    </section>
  );
};

export default Grid;
