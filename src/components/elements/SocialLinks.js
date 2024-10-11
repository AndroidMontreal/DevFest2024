// components/SocialLinks.js

import { FaDiscord, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const socialLinksData = [
  { href: 'https://x.com/gdgmontreal', icon: FaXTwitter, label: 'LinkedIn' },
  { href: 'https://www.linkedin.com/company/gdgmontreal', icon: FaLinkedinIn, label: 'LinkedIn' },
  { href: 'https://www.instagram.com/gdgmtl/', icon: FaInstagram, label: 'LinkedIn' },
  { href: 'https://discord.com/invite/rKMxWWDSTT', icon: FaDiscord, label: 'LinkedIn' },
  { href: 'https://youtube.com/@gdgmontreal', icon: FaYoutube, label: 'YouTube' },
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-3">
      {socialLinksData.map((link) => (
        <a key={link.label} href={link.href} className="hover:text-gray-400 text-gray-200">
          <span className="sr-only">{link.label}</span>
          <link.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}
