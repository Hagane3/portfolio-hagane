import React from 'react';
import classes from './Grid.module.scss';

const Grid = () => {
  return (
    <section className={classes.root}>
      <div className={classes.gridItem}></div>
      <div className={classes.gridItem}></div>
      <div className={classes.gridItem}></div>
      <div className={classes.gridItem}></div>
      <div className={classes.gridItem}></div>
    </section>
  );
};

export default Grid;
