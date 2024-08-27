import '@/styles/globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'], // Adjust subsets based on your language requirements
  weight: ['400', '700'], // Include the font weights you'll use
  variable: '--font-poppins', // Define a CSS variable to reference the font
});
export const metadata = {
  title: 'GDG Montreal - DevFest 2024',
  description: 'GDG Montreal - DevFest 2024',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={poppins.className}>{children}</body>
    </html>
  );
}
