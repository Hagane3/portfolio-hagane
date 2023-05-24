import React from 'react';
import classes from './SoundWaves.module.scss';

const SoundWaves = () => {
  return (
    <div className={classes.root}>
      <div className={`${classes.box} ${classes.box1}`}></div>
      <div className={`${classes.box} ${classes.box2}`}></div>
      <div className={`${classes.box} ${classes.box3}`}></div>
    </div>
  );
};

export default SoundWaves;
