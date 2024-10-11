'use client';
import Image from 'next/image';
import { CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline';
import PillButton from '@/components/elements/PillButton';
import Link from 'next/link';

const EventHeader = ({
                       eventData,
                     }) => {
  return (
    <div className="flex flex-col">

      <h1
        className="text-[min(12vw,60px)] leading-[1.3] tracking-tighter font-bold pt-14 pb-8 text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700 md:text-center">
        {eventData.eventName} {eventData.eventCity} {eventData.year}
      </h1>

      <div className="container mx-auto flex flex-col items-start xl:items-center lg:flex-row justify-evenly gap-9">
        <div>
          <Image
            className="rounded-xl shadow-xl "
            src={eventData.imageUrl}
            alt={`${eventData.eventName} Banner`}
            width={600}
            height={0}
          />
        </div>
        <div className="mb-6 md:mb-0 text-left md:text-left">

          <p className="text-gray-600 max-w-xl">{eventData.description}</p>

          <div
            className="flex flex-col xl:flex-row text-black font-medium my-5 gap-3">

            <div className="flex">
              <CalendarDaysIcon className="h-6 w-6 text-gray-500 mr-2" />
              <p className="text-gray-700">{eventData.date}</p>
            </div>

            <div className="flex">
              <MapPinIcon className="h-6 w-6 text-gray-500 mr-2" />
              <p className="text-gray-700 underline">
                <Link
                  href="#venue">
                  {eventData.location}
                </Link>
              </p>
            </div>

          </div>

          <PillButton className="my-6 flex" href={eventData.buttonLink} label={eventData.buttonText} />

        </div>

      </div>
    </div>
  );
};
export default EventHeader;
