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
  metadataBase: new URL('http://devfest2024.gdgmontreal.com/'),
  title: 'DevFest Montreal 2024 | Google Developers Group Montreal | GDG Cloud Montreal | WTM Montreal | Flutter Montreal | GDSC Concordia | GDSC McGill',
  description: 'DevFests are local tech conferences hosted by Google Developer Groups (GDG) around the world. Each DevFest event is crafted by its local organizers to fit the needs and interests of its local developer community. Whether it be through hands-on learning experiences, technical talks delivered in local languages by experts, or by simply meeting fellow local developers, DevFest attendees learn how to build together and innovate on Google’s developer tools.',
  openGraph: {
    images: ['/images/logo/eventHeader.gif'],
  }
};

export default function RootLayout({ children }) {
  return (<html lang="en">
    <body className={openSans.className}>
      <Header />
      <main className="container flex mx-auto px-5 flex-col flex-grow"> {/* Allow main content to expand */}
        {children}
      </main>
      <Footer />
      <GoogleAnalytics />
    </body>
  </html>
  );
}
