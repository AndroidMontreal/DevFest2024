import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { navigationData } from '@/data/navigationData';
import { v4 as uuidv4 } from 'uuid';

const Navbar = ({ isMobile }) => {
  const router = useRouter();
  const pathname = usePathname();


  return (
    <nav className={isMobile ? 'flex flex-col space-y-2 ' : 'hidden md:flex space-x-2 items-center'}>
      {navigationData.map((link) => (
        <Link
          key={uuidv4()}
          href={link.href}
          className={`
            text-gray-800 
            px-4
            py-2
            text-md
            hover:text-black
            hover:bg-gray-200
            ${!isMobile && 'rounded-full'}
            ${pathname === link.href
            ? 'bg-gray-300 text-gray-800' // Active link styles
            : ''
          }
          `}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
