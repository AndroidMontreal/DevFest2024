'use client';
import TitleWithSubtitle from '@/components/elements/TitleWithSubtitle';
import PillButton from '@/components/elements/PillButton';

const EventHeader = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center my-10">

      <div
        className="mx-auto flex flex-col sm:flex-row items-center gap-4 px-4 mt-1 font-mono text-lg text-gray-500"
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

      <TitleWithSubtitle
        title="About The Event"
        subTitle="DevFests are local tech conferences hosted by Google Developer Groups (GDG) around the world. Each DevFest event is crafted by its local organizers to fit the needs and interests of its local developer community. Whether it be through hands-on learning experiences, technical talks delivered in local languages by experts, or by simply meeting fellow local developers, DevFest attendees learn how to build together and innovate on Google’s developer tools."
        titleClassName="max-w-2xl"
        subTitleClassName="max-w-4xl" />

      <div className="flex md:flex-row flex-col gap-5">
        <PillButton onClick={() => {
          window.open('https://devfestmontreal2024.eventbrite.ca', '_blank');
        }} label="Get your tickets" />

      </div>
    </div>
  );
};

export default EventHeader;
