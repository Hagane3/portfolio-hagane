import '@/styles/resets.scss';
import '@/styles/global.scss';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '700'] });

export const metadata = {
  title: 'Konrad Słomiany - Frontend Developer',
  description: 'Konrad Słomiany portfolio website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className} data-theme="dark">
        {children}
      </body>
    </html>
  );
}
