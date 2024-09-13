'use client';
import Image from 'next/image';
import logo from '@/public/images/logo/devFestLogoHorizontal.svg';
import Link from 'next/link';
import Navbar from '@/components/elements/Navbar';
import MobileDrawer from '@/components/elements/MobileDrawer';
import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import PillButton from '@/components/elements/PillButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 mt-4 px-3">
      <div className="bg-gray-100 container mx-auto flex items-center justify-between p-5 rounded-2xl">

        {/* Logo and other elements on the left */}
        <Link href="/">
          <Image
            src={logo}
            width={250}
            alt="Montreal Google Developer Group"
            priority={true}
          />
        </Link>

        <div className="flex flex-row ">
          {/* Navigation (Desktop) on the right */}
          <Navbar isMobile={false} />
          <PillButton className="ml-3 hidden lg:flex" href="https://devfestmontreal2024.eventbrite.ca"
                      label="Get Tickets" />

        </div>
        {/* Hamburger Menu (Mobile) */}
        <button
          className="lg:hidden text-gray-800 hover:text-black focus:outline-none p-2 hover:bg-gray-200 rounded-full"
          onClick={() => setIsMenuOpen(true)}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>

      </div>


      {/*App Drawer overlay background*/}
      {isMenuOpen && <div
        className="lg:hidden fixed inset-0 bg-black bg-opacity-40"
        onClick={() => setIsMenuOpen(false)}
      >

      </div>}

      {/* App Drawer (Mobile) */}
      <MobileDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

    </header>
  );
};

export default Header;
