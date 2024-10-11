import Link from 'next/link';
import { footerNavData } from '@/data/headerNavData';
import SocialLinks from '@/components/elements/SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-90 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-9">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold tracking-tighter">GDG Montreal</h2>
            <p className="text-xs text-gray-400 italic">© {new Date().getFullYear()} GDG Montreal. All rights
              reserved.</p>
          </div>
          <div className="lg:space-x-3 flex flex-col lg:flex-row justify-between">
            {footerNavData.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-gray-300">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex space-x-4">
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
