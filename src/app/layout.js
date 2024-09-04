import GoogleAnalytics from '@/lib/GoogleAnalytics';
import '@/styles/globals.css';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  weight: ['400', '700'], // Include the font weights you'll use
  style: 'normal', // or italic
  subsets: ['latin'],
  display: 'swap',
});
export const metadata = {
  title: 'GDG Montreal - DevFest Montreal 2024', description: 'GDG Montreal - DevFest 2024',
};

export default function RootLayout({ children }) {
  return (<html lang="en">
    <body className={openSans.className}>
      {children}
      <GoogleAnalytics />
    </body>
  </html>);
}
