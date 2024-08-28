import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';


const SponsorCard = ({ sponsors }) => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        className=" -mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 md:grid-cols-3">

        {sponsors.map((partner) => (
          <a
            key={uuidv4()} // Add a unique key for each organizer
            href={partner.website}
            className="flex items-center justify-center bg-gray-400/5 p-2 sm:p-2"
          >
            <Image
              className="max-h-96 w-auto object-cover hover:opacity-80 transition-opacity hover:grayscale grayscale-0"
              src={partner.logo}
              alt={partner.company}
              width={800}
              height={500}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SponsorCard;
