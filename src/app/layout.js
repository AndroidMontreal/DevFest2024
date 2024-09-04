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
  title: 'DevFest Montreal 2024 | GDG Montreal',
  description: 'DevFest Montreal 2024 | Google Developers Group Montreal | GDG Cloud Montreal | WTM Montreal | Flutter Montreal | GDSC Concordia | GDSC McGill',
};

export default function RootLayout({ children }) {
  return (<html lang="en">
    <body className={openSans.className}>
      {children}
      <GoogleAnalytics />
    </body>
  </html>);
}
