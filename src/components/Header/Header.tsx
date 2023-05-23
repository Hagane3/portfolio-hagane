import React from 'react';
import Image from 'next/image';

import classes from './Header.module.scss';

import ProfilePhoto from '@/assets/images/profile-photo.png';
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
            <a href="#">
              <Image src={GithubIcon} alt="github icon" />
            </a>
            <a href="#">
              <Image src={LinkedinIcon} alt="github icon" />
            </a>
          </div>
        </div>
      </div>
      <div className={classes.profileDetails}>
        <div className={classes.profileFacts}>
          <div className={classes.factsItem}>
            <h3>
              <span>2+</span> Years of learning
            </h3>
          </div>
          <div className={classes.factsItem}>
            <h3>
              <span>15+</span> Completed projects
            </h3>
          </div>
          <div className={classes.factsItem}>
            <h3>
              <span>8+</span> Personal side projects
            </h3>
          </div>
        </div>
        <div className={classes.cvContact}>
          <button>
            Download CV <Image src={DownloadIcon} alt="download icon" />
          </button>
          <button>Contact me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
