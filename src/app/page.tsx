import ThemeIcon from '../../public/icons/theme-change.svg';
import DownloadIcon from '../../public/icons/download.svg';
import ProfilePhoto from '../../public/images/profile-photo.png';
import GithubIcon from '../../public/icons/github.svg';
import LinkedinIcon from '../../public/icons/linkedin.svg';

import Image from 'next/image';

import classes from './page.module.scss';

export default function Home() {
  return (
    <main className={classes.root}>
      <nav>
        <button>
          <Image src={ThemeIcon} alt="theme change icon" />
        </button>
      </nav>
      <header>
        <div className={classes.profilePhoto}>
          <Image src={ProfilePhoto} alt="profile photo" />
        </div>
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
      <section className={classes.gridSection}>
        <div className={classes.gridItem}></div>
        <div className={classes.gridItem}></div>
        <div className={classes.gridItem}></div>
        <div className={classes.gridItem}></div>
        <div className={classes.gridItem}></div>
      </section>
      <section className={classes.projectsSection}>
        <div className={classes.tabs}>
          <button className={classes.active}>Projects</button>
          <button>Contributions</button>
        </div>
        <div className={classes.projects}>
          <div className={classes.singleProject}></div>
          <div className={classes.singleProject}></div>
          <div className={classes.singleProject}></div>
          <div className={classes.singleProject}></div>
          <div className={classes.singleProject}></div>
          <div className={classes.singleProject}></div>
        </div>
      </section>
    </main>
  );
}
