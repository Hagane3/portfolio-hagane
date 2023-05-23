import React from 'react';
import classes from './Projects.module.scss';

const Projects = () => {
  return (
    <section className={classes.root}>
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
  );
};

export default Projects;
