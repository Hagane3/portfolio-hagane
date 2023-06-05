import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export function getAllProjects() {
  const PROJECTS_DIR = path.join(process.cwd(), 'src/content/projects');
  const allRawProjects = fs.readdirSync(PROJECTS_DIR);
  const allConvertedProjects = allRawProjects.map((project) => {
    const fileContents = fs.readFileSync(`src/content/projects/${project}`, 'utf8');
    const projectName = project.replace('.md', '');
    const { data } = matter(fileContents);
    return { data, projectName };
  });
  return allConvertedProjects;
}
