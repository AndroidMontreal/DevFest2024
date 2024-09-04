'use client';
import PillButton from '@/components/elements/PillButton';
import { clsx } from '@/lib/utils';

const EventHeader = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center my-10">

      <div
        className="mx-auto flex flex-col sm:flex-row items-center gap-4 px-4 mt-1 font-mono text-lg text-gray-500 text-center"
      >
        <p>
          <time dateTime="10-09-2024">November 9th, 2024</time>
        </p>

        <svg
          aria-hidden="true"
          viewBox="0 0 6 6"
          className="h-1.5 w-1.5 overflow-visible fill-current stroke-current hidden sm:block"
        >
          <path d="M3 0L6 3L3 6L0 3Z" strokeWidth="2" strokeLinejoin="round" />
        </svg>
        <p>Concordia University Conference Center</p>
      </div>

      <div className="flex gap-6 flex-col place-items-center text-center">
        <h1
          className={clsx(
            'text-[min(12vw,72px)] leading-[1.3] tracking-tighter font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700',
            'max-w-4xl',
          )}
        >
          Devfest Montreal 2024
        </h1>
        <p className={clsx('font-normal text-gray-900', 'max-w-4xl')}>
          DevFests are local tech conferences hosted by Google Developer Groups (GDG) around the world. Each DevFest event is crafted by its local organizers to fit the needs and interests of its local developer community. Whether it be through hands-on learning experiences, technical talks delivered in local languages by experts, or by simply meeting fellow local developers, DevFest attendees learn how to build together and innovate on Google’s developer tools.
        </p>
      </div>

      <div className="flex md:flex-row flex-col gap-5">
        <PillButton onClick={() => {
          window.open('https://devfestmontreal2024.eventbrite.ca', '_blank');
        }} label="Get your tickets" />

      </div>
    </div>
  );
};

export default EventHeader;
