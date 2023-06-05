import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export function getSingleProject(projectName: any) {
  const PROJECTS_DIR = path.join(process.cwd(), 'src/content/projects');
  const fileContents = fs.readFileSync(`${PROJECTS_DIR}/${projectName}.md`, 'utf8');
  const { data, content } = matter(fileContents);
  return { data, content };
}
