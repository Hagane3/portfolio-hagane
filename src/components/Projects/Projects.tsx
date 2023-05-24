'use client';

import React from 'react';
import classes from './Projects.module.scss';
import { useState } from 'react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const changeTabHandler = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <section className={classes.root}>
      <div className={classes.tabs}>
        <button className={activeTab === 'projects' ? classes.active : ''} onClick={() => changeTabHandler('projects')}>
          Projects
        </button>
        <button
          className={activeTab === 'contributions' ? classes.active : ''}
          onClick={() => changeTabHandler('contributions')}
        >
          Contributions
        </button>
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
  );
};

export default Projects;
