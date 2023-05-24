import React from 'react';
import classes from './CommunityTile.module.scss';
import Image from 'next/image';
import SocialsImage from '@/assets/images/socials.svg';
import ArrowIcon from '@/assets/icons/arrow.svg';

const CommunityTile = () => {
  return (
    <div className={classes.root}>
      <span>
        If you&apos;re looking for a healthy community to support people at the beginning of their journey in IT - join
        us. If you&apos;re experienced in the industry and want to help others - you&apos;ll find a place for you, too.
      </span>
      <div className={classes.joinUs}>
        <button>
          Join us <Image src={ArrowIcon} alt="arrow icon" />
        </button>
      </div>
      <Image className={classes.socialsImage} src={SocialsImage} alt="avatar sit" />
    </div>
  );
};

export default CommunityTile;
