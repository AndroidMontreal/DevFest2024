import Image from 'next/image';
import Link from 'next/link';

const SpeakerCard = ({ speaker }) => {
  return (
    <Link
      href={speaker.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex hover:text-red-700">

      <div className="flex flex-col">

        <div className="relative aspect-square overflow-hidden rounded-2xl"> {/* Fixed aspect ratio container */}
          <Image
            src={speaker.image}
            alt={`${speaker.name}'s avatar`}
            height={400}
            width={400}
            className="rounded-2xl aspect-square object-cover shadow-lg group-hover:shadow-xl group-hover:scale-105 transition"
          />
        </div>

        <div className="w-full py-6 text-start ">
          <h3 className="text-2xl font-semibold text-gray-800 py-1 group-hover:text-gray-500">{speaker.name}</h3>
          <p className="text-gray-600 group-hover:text-gray-500">{speaker.title}</p>
        </div>

      </div>
    </Link>
  );
};

export default SpeakerCard;