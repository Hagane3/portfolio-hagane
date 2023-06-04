import React from 'react';
import classes from './SingleProject.module.scss';
import Link from 'next/link';

const SingleProject = ({ project }: any) => {
  console.log(project);
  return (
    <Link href={`/projects/${project.projectName}`}>
      <div className={classes.root}>{project.data.title} </div>
    </Link>
  );
};

export default SingleProject;
