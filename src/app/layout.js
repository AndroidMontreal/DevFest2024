import GoogleAnalytics from '@/lib/GoogleAnalytics';
import '@/styles/globals.css';
import { Open_Sans } from 'next/font/google';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

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
      <Header />
      <main className="container flex mx-auto p-2 flex-col flex-grow"> {/* Allow main content to expand */}
        {children}
      </main>
      <Footer />
      <GoogleAnalytics />
    </body>
  </html>
  );
}
