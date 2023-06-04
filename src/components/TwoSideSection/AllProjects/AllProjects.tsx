import React from 'react';
import classes from './AllProjects.module.scss';
import SingleProject from './SingleProject/SingleProject';

const Projects = () => {
  return (
    <div className={classes.root}>
      <SingleProject />
      <SingleProject />
      <SingleProject />
    </div>
  );
};

export default Projects;
