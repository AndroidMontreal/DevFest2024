import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

const SponsorCard = ({ sponsors }) => {
  return (
    <div className="flex flex-wrap justify-center mx-auto  px-6 lg:px-6">
      {sponsors.map((partner) => (
        <div
          key={uuidv4()}
          className="w-1/2 lg:w-auto  p-2 sm:p-2">
          <a href={partner.website} target="_blank" rel="noopener noreferrer" className="block w-full">
            <Image
              className=" hover:opacity-80 transition-opacity hover:grayscale grayscale-0"
              src={partner.logo}
              alt={partner.company}
              width={400}
              height={250}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default SponsorCard;
