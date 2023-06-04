import fs from 'fs';
import matter from 'gray-matter';

export function getSingleProject(projectName: any) {
  const fileContents = fs.readFileSync(`src/content/projects/${projectName}.md`, 'utf8');
  const { data, content } = matter(fileContents);
  return { data, content };
}
