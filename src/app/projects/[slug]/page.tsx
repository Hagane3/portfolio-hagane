import React from 'react';
import { getSingleProject } from '@/utils/getSingleProject';
import Markdown from 'markdown-to-jsx';

export async function generateMetadata({ params }: any) {
  const { data } = getSingleProject(params.slug);
  return {
    title: data.title,
  };
}

const ProjectPage = ({ params }: any) => {
  const { content } = getSingleProject(params.slug);
  return <Markdown>{content}</Markdown>;
};

export default ProjectPage;
