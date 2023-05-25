import Navbar from '@/components/Navbar/Navbar';
import Header from '@/components/Header/Header';
import Grid from '@/components/Grid/Grid';
import TwoSideSection from '@/components/TwoSideSection/TwoSideSection';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <Grid />
      <TwoSideSection />
      <Footer />
    </main>
  );
}
