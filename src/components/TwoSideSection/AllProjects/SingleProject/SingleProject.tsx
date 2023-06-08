import React from 'react';
import classes from './SingleProject.module.scss';
import Link from 'next/link';

const SingleProject = ({ project }: any) => {
  return (
    <Link href={`/projects/${project.projectName}`}>
      <div className={classes.root}>
        <div className={classes.wrapper} style={{ backgroundImage: `url(${project.data.image})` }}>
          <span>{project.data.title}</span>
          <div className={classes.backdrop}></div>
        </div>
      </div>
    </Link>
  );
};

export default SingleProject;
