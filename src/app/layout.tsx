'use client';

import '@/styles/resets.scss';
import '@/styles/global.scss';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';
import { useTheme } from '@/context/ThemeContext';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '700'] });

export const metadata = {
  title: 'Konrad Słomiany - Frontend Developer',
  description: 'Konrad Słomiany portfolio website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={poppins.className} data-theme={theme}>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
