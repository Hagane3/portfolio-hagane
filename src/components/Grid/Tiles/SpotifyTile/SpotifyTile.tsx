import React from 'react';
import classes from './SpotifyTile.module.scss';
import Image from 'next/image';
import SpotifyIcon from '@/assets/icons/spotify.svg';
import SoundWaves from '@/components/UI/SoundWaves/SoundWaves';

const SpotifyTile = () => {
  return (
    <div className={classes.root}>
      <Image src={SpotifyIcon} alt="spotify icon" />
      <div className={classes.musicDetails}>
        <div className={classes.nowPlaying}>
          <SoundWaves /> <span>Now playing</span>
        </div>
        <div className={classes.songDetails}>
          <h4>Song Title</h4>
          <h5>Author</h5>
        </div>
      </div>
    </div>
  );
};

export default SpotifyTile;
