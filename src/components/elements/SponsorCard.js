import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

const SponsorCard = ({ sponsors }) => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 md:grid-cols-3">
        {sponsors.map((partner) => (
          <div
            key={uuidv4()} // Use a stable identifier if available, otherwise uuid is fine
            className={`flex items-center justify-center p-2 sm:p-2 
                        ${sponsors.length === 1 ? 'col-span-full' : ''} 
                        ${sponsors.length === 2 ? 'md:col-span-2' : ''}`
            }
          >
            <a href={partner.website} target="_blank" rel="noopener noreferrer">
              <Image
                className="max-h-96  hover:opacity-80 transition-opacity hover:grayscale grayscale-0"
                src={partner.logo}
                alt={partner.company}
                width={400}
                height={500}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorCard;
