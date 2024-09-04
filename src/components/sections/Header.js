import Image from 'next/image';
import logo from '@/public/images/logo/devfest_logo.svg';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="py-4 mx-auto flex flex-row w-full"> {/* Relative positioning for potential overlay */}
      <div className="w-full">
        <Link href="/">
          <Image
            src={logo}
            width={200}
            alt="Montreal Google Developer Group"
            priority={true}
          />
        </Link>
      </div>
      <nav className="flex gap-4 w-full justify-end">
        <Link href="/code-of-conduct" className="text-lg font-medium hover:underline self-center">
          Code of Conduct
        </Link>
      </nav>
    </header>
  );
};

export default Header;
