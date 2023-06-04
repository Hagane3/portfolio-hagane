import React from 'react';
import classes from './AllProjects.module.scss';
import SingleProject from './SingleProject/SingleProject';

const Projects = ({ projects }: any) => {
  return (
    <div className={classes.root}>
      {projects.map((item: any) => (
        <SingleProject key={item.data.id} project={item} />
      ))}
    </div>
  );
};

export default Projects;
