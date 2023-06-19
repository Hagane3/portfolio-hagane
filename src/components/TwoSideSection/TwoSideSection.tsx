'use client';

import React from 'react';
import classes from './TwoSideSection.module.scss';
import AllProjects from '@/components/TwoSideSection/AllProjects/AllProjects';
import AboutMe from '@/components/TwoSideSection/AboutMe/AboutMe';
import { useState } from 'react';

const Projects = ({ projects }: any) => {
  const [activeTab, setActiveTab] = useState('projects');

  const changeTabHandler = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section className={classes.root}>
      <div className={classes.tabs}>
        <button onClick={() => changeTabHandler('projects')}>Projects</button>
        <button onClick={() => changeTabHandler('about')} className={activeTab === 'about' ? classes.active : ''}>
          About me
        </button>
        <div className={`${classes.slider} ${activeTab === 'about' ? classes.active : ''}`}></div>
      </div>
      {activeTab === 'projects' ? <AllProjects projects={projects} /> : <AboutMe />}
    </section>
  );
};

export default Projects;
