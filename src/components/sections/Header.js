import Image from 'next/image';
import logo from '@/public/images/logo/gdg_montreal.png';
import devFestBanner from '@/public/images/logo/devfest-event-banner.jpg';


const Header = () => {
  return (
    <header className=" mx-auto flex flex-col"> {/* Relative positioning for potential overlay */}
      <div className="py-3">
        <Image
          src={logo}
          width={250}
          alt="Montreal Google Developer Group"
          priority={true}
        />
      </div>
      <div className="w-full mt-2">
        <Image
          src={devFestBanner}
          className="rounded-lg"
          alt="DevFest Banner"
          width="auto"
        />
      </div>
    </header>
  );
};

export default Header;
