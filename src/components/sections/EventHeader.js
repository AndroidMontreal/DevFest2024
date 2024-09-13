'use client';
import Image from 'next/image';
import { CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline';
import PillButton from '@/components/elements/PillButton';
import Link from 'next/link';

const EventHeader = ({
                       eventData,
                     }) => {
  return (
    <div className="relative pt-28">
      <div className="container mx-auto px-4 flex flex-col items-center lg:flex-row justify-around">

        <div className="mb-6 md:mb-0 text-left md:text-left">
          <h1 className="text-6xl font-semibold tracking-tighter text-gray-800 py-3">{eventData.eventName} <br />
            <span className="font-semibold">{eventData.eventCity}</span>
          </h1>
          <p className="text-gray-600">{eventData.year}</p>
          <p className="text-gray-600 max-w-xl">{eventData.description}</p>


          <div className="flex text-black font-medium lg:items-center my-5 justify-start lg:justify-start">
            <CalendarDaysIcon className="h-5 w-5 text-gray-500 mr-2" />
            <p className="text-gray-700">{eventData.date}</p>
            <MapPinIcon className="h-6 w-6 text-gray-500 mr-2 ml-4" />
            <p className="text-gray-700 underline">
              <Link
                href="#venue">
                {eventData.location}
              </Link>

            </p>
          </div>

          <PillButton className="my-6 flex" href={eventData.buttonLink} label={eventData.buttonText} />

        </div>

        <div className="p-5">
          <Image
            src={eventData.imageUrl}
            alt={`${eventData.eventName} Banner`}
            width={600}
            height={0}
          />
        </div>
      </div>
    </div>
  );
};
export default EventHeader;
