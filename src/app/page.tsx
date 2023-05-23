import Navbar from '@/components/Navbar/Navbar';
import Header from '@/components/Header/Header';
import Grid from '@/components/Grid/Grid';
import Projects from '@/components/Projects/Projects';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <Grid />
      <Projects />
      <Footer />
    </main>
  );
}
