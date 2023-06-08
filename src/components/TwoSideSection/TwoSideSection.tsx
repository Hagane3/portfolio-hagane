'use client';

import React from 'react';
import classes from './TwoSideSection.module.scss';
import AllProjects from '@/components/TwoSideSection/AllProjects/AllProjects';
import AboutMe from '@/components/TwoSideSection/AboutMe/AboutMe';
import { useState } from 'react';

const Projects = ({ projects }: any) => {
  const [isProjectsActive, setIsProjectsActive] = useState(true);

  const toggleTabHandler = () => {
    setIsProjectsActive((prevState) => !prevState);
  };

  return (
    <section className={classes.root}>
      <div className={classes.tabs}>
        <button className={isProjectsActive ? classes.active : ''} onClick={toggleTabHandler}>
          Projects
        </button>
        <button className={!isProjectsActive ? classes.active : ''} onClick={toggleTabHandler}>
          About me
        </button>
      </div>
      {isProjectsActive ? <AllProjects projects={projects} /> : <AboutMe />}
    </section>
  );
};

export default Projects;
