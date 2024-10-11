import { speakers2024 } from '@/data/speakers2024Data';
import Image from 'next/image';
import { FaRegEnvelope } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import { CiGlobe } from 'react-icons/ci';


const SpeakerDetails = ({ params }) => {

  const speaker = speakers2024.find(s => s.slug === params.slug);


  if (!speaker) {
    throw new Error('Speaker not found'); // This will trigger the error.js component
  }
  return (
    <div className="flex flex-col  max-w-7xl items-start mx-auto justify-center p-8 gap-8 my-10 md:my-24">

      <div className="w-full flex flex-col text-center justify-center gap-1">
        <h2
          className="text-[min(12vw,60px)] leading-[1.3] tracking-tighter font-semibold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700 mb-1">{speaker.name}</h2>
        <p className="text-gray-600 mb-4">{speaker.title}</p>

      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-8 w-full">

        <div className="w-full lg:w-2/5 flex justify-end">

          <Image
            src={speaker.image}
            alt={speaker.name}
            width={350}
            height={550}
            className="rounded-2xl shadow-2xl hover:shadow-2xl transition duration-500 object-cover overflow-hidden w-full"
          />

        </div>

        <div className="w-full lg:w-2/5 text-left">

          {/* Removed till added session completely */}
          {/*<h2*/}
          {/*  className="text-[min(12vw,35px)] leading-[1.3] tracking-tighter font-semibold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700 mb-4">{speaker.headline}</h2>*/}


          <p className="mb-4">{speaker.shortBio}</p>

          <div className="flex space-x-2 mt-2">
            {speaker.social?.website && (
              <a href={speaker.social.website} target="_blank" rel="noopener noreferrer">
                <CiGlobe className="h-8 w-8 p-2 text-white bg-gray-900 bg-opacity-90 rounded hover:" />
              </a>
            )}
            {speaker.social?.email && (
              <a href={`mailto:${speaker.social.email}`}>
                <FaRegEnvelope className="h-8 w-8 p-2 text-white bg-gray-900 bg-opacity-90 rounded" />
              </a>
            )}
            {speaker.social?.linkedIn && (
              <a href={speaker.social.linkedIn} target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="h-8 w-8 p-2 text-white bg-gray-900 bg-opacity-90 rounded" />
              </a>
            )}
          </div>

        </div>

      </div>
    </div>

  );
};

export default SpeakerDetails;

export async function generateStaticParams() {
  return speakers2024.map((speaker) => ({
    slug: speaker.slug,
  }));
}
