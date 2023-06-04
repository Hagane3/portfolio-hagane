import Navbar from '@/components/Navbar/Navbar';
import Header from '@/components/Header/Header';
import Grid from '@/components/Grid/Grid';
import TwoSideSection from '@/components/TwoSideSection/TwoSideSection';
import Footer from '@/components/Footer/Footer';
import { getAllProjects } from '@/utils/getAllProjects';

export default function Home() {
  const projects = getAllProjects();
  console.log(projects);
  return (
    <main>
      <Grid />
      <TwoSideSection projects={projects} />
    </main>
  );
}
