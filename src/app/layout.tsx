import '@/styles/resets.scss';
import '@/styles/global.scss';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar/Navbar';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '700'] });

export const metadata = {
  title: 'Konrad Słomiany - Frontend Developer',
  description: 'Konrad Słomiany portfolio website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={poppins.className}>
          <Navbar />
          <Header />
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
