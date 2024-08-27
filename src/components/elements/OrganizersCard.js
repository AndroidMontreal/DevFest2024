import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

const OrganizersCard = ({ organizers }) => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        className=" -mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 md:grid-cols-3">

        {organizers.map((organizer) => (
          <a
            key={uuidv4()} // Add a unique key for each organizer
            href={organizer.website}
            className="flex items-center justify-center bg-gray-400/5 p-8 sm:p-10"
          >
            <Image
              className="max-h-52 w-auto object-contain hover:opacity-80 transition-opacity hover:grayscale grayscale-0"
              src={organizer.logo}
              alt={organizer.company}
              width={200}
              height={48}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default OrganizersCard;
