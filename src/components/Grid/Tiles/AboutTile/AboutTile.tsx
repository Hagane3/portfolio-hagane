import React from 'react';
import classes from './AboutTile.module.scss';
import AvatarSit from '@/assets/images/avatar-sit.svg';
import Image from 'next/image';

const AboutTile = () => {
  return (
    <div className={classes.root}>
      <span>
        Hello, I am Konrad. I am full of enthusiasm and eager to develop in the IT industry. I have always been
        interested in new technologies and creative ways to use them in web development. I am an ambitious, hardworking,
        and goal-oriented person, ready for the challenges that the job market presents.
      </span>
      <Image src={AvatarSit} alt="avatar sit" />
    </div>
  );
};

export default AboutTile;
