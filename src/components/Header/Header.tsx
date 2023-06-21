import React from 'react';
import Image from 'next/image';

import classes from './Header.module.scss';

import ProfilePhoto from '@/assets/images/profile-photo.webp';
import GithubIcon from '@/assets/icons/github.svg';
import LinkedinIcon from '@/assets/icons/linkedin.svg';
import DownloadIcon from '@/assets/icons/download.svg';

const Header = () => {
  return (
    <header className={classes.root}>
      <div className={classes.profile}>
        <Image src={ProfilePhoto} alt="profile photo" className={classes.profilePhoto} />
        <div className={classes.profileInfo}>
          <h1>Konrad Słomiany</h1>
          <h2>Frontend Developer</h2>
          <div className={classes.socialMedia}>
            <div className={classes.wrapper}>
              <a href="https://github.com/Hagane3" target="_blank">
                <Image src={GithubIcon} alt="github icon" />
              </a>
              <a href="https://www.linkedin.com/in/konradslomiany/" target="_blank">
                <Image src={LinkedinIcon} alt="github icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.profileDetails}>
        <div className={classes.profileFacts}>
          <div className={classes.factsItem}>
            <h3>
              <span>1.5+</span> Years of learning
            </h3>
          </div>
          <div className={classes.factsItem}>
            <h3>
              <span>12+</span> Completed projects
            </h3>
          </div>
          <div className={classes.factsItem}>
            <h3>
              <span>11+</span> Personal side projects
            </h3>
          </div>
        </div>
        <div className={classes.cvContact}>
          <a href="https://drive.google.com/file/d/1pbZ9PuMcOIPTfzeQ_xMpaSK6Wh0y1ePr/view?usp=sharing" target="_blank">
            Download CV <Image src={DownloadIcon} alt="download icon" />
          </a>
          <a href="mailto:konslo96@gmail.com">Contact me</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
