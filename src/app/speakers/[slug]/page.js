import { speakers2024 } from '@/data/speakers2024Data';
import { sessions2024Data } from '@/data/sessions2024Data';
import Image from 'next/image';
import { FaRegEnvelope } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import { CiGlobe } from 'react-icons/ci';
import { getFirstName } from '@/lib/utils';
import { SessionInfo } from '@/components/elements/SessionInfo';

export async function generateMetadata({ params }) {

  const speaker = speakers2024.find(s => s.slug === params.slug);
  return {
    title: speaker.name,
    description: speaker.title,
    openGraph: {
      images: [speaker.image],
    },
  };
}

const SpeakerDetails = ({ params }) => {

  const speaker = speakers2024.find(s => s.slug === params.slug);

  // multiple sessions of one speaker
  const speakerSessions = sessions2024Data.filter(session =>
    session.speakerUUID.includes(speaker.uuid),
  );

  if (!speaker) {
    throw new Error('Speaker not found'); // This will trigger the error.js component
  }

  return (<div className="flex flex-col  max-w-7xl items-start mx-auto justify-center gap-8 my-10 md:my-24">

    <div className="flex flex-col lg:flex-row justify-center gap-8 w-full relative top-0">

      <div className="w-full h-full lg:w-2/5 flex lg:sticky">
        {speaker &&
          <div className="w-full flex flex-col text-left justify-center gap-1 ">
            <Image
              src={speaker.image}
              alt={speaker.name}
              width={350}
              height={550}
              className="rounded-2xl aspect-square transition duration-500 shadow-xl hover:shadow-2xl object-cover overflow-hidden w-full"
            />
            <h1
              className="text-[min(9vw,50px)] leading-[1.3] tracking-tighter pt-10 font-semibold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700 mb-1">{speaker.name}</h1>
            <p className="text-gray-600 mb-2 italic">{speaker.title}</p>

            <div className="flex space-x-2 mt-2">
              {speaker.social?.website && (<a href={speaker.social.website} target="_blank" rel="noopener noreferrer">
                <CiGlobe className="h-8 w-8 p-2 text-white bg-gray-900 bg-opacity-90 rounded hover:text-gray-300" />
              </a>)}
              {speaker.social?.email && (<a href={`mailto:${speaker.social.email}`}>
                <FaRegEnvelope
                  className="h-8 w-8 p-2 text-white bg-gray-900 bg-opacity-90 rounded hover:text-gray-300" />
              </a>)}
              {speaker.social?.linkedIn && (
                <a href={speaker.social.linkedIn} target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn
                    className="h-8 w-8 p-2 text-white bg-gray-900 bg-opacity-90 rounded hover:text-gray-300" />
                </a>)}
            </div>

          </div>
        }
      </div>

      <div className="w-full lg:w-3/5 text-left space-y-8">

        {/* speaker details */}
        {speaker &&
          <div id="aboutSpeaker">
            <h2
              className="text-[min(7vw,40px)] leading-[1.3] tracking-tight font-semibold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700 mb-1">About {getFirstName(speaker.name)}</h2>

            <div className="prose lg:prose-base ">
              {speaker.shortBio.split('\n').map((paragraph, index) => (<p key={index}>{paragraph}</p>))}
            </div>
          </div>
        }

        {/* sessions details - if speaker have two or more sessions */}
        {speakerSessions.map(session => (
          <SessionInfo key={session.uuid} session={session} />
        ))}

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
