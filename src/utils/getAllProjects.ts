import fs from 'fs';
import matter from 'gray-matter';

export function getAllProjects() {
  const allRawProjects = fs.readdirSync('src/content/projects');
  const allConvertedProjects = allRawProjects.map((project) => {
    const fileContents = fs.readFileSync(`src/content/projects/${project}`, 'utf8');
    const projectName = project.replace('.md', '');
    const { data } = matter(fileContents);
    return { data, projectName };
  });
  return allConvertedProjects;
}
