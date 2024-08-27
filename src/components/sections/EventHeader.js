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
        <p>Guy-Concordia</p>
      </div>

      <TitleWithSubtitle
        title="About The Event"
        subTitle="DevFests are local tech conferences hosted by Google Developer Groups (GDG) around the world. Each DevFest event is crafted by its local organizers to fit the needs and interests of its local developer community. Whether it be through hands-on learning experiences, technical talks delivered in local languages by experts, or by simply meeting fellow local developers, DevFest attendees learn how to build together and innovate on Google’s developer tools."
        titleClassName="max-w-2xl"
        subTitleClassName="max-w-4xl" />

      <div className="flex md:flex-row flex-col gap-5">
        <PillButton onClick={() => {
          window.open('https://discord.gg/zhSqkWTS', '_blank');
        }} label="Get your tickets" />

        <PillButton
          label="Add to calendar"
          action="secondary"
          onClick={() => {
            window.open(
              'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NDA1OTY0MWFhNXNmaGZuYW5udnJ2bTRyZTJfMjAyMzEyMDFUMDIzMDAwWiA4MmNmMWQxMWM3MzI1ZjlhZTk1Y2ExNmFkOWEyNmE5MThiMTUyNTk5ODQwMzIyNWM5MGEwM2JkYTQ3NzdjZTcyQGc&tmsrc=82cf1d11c7325f9ae95ca16ad9a26a918b1525998403225c90a03bda4777ce72%40group.calendar.google.com&scp=ALL',
              '_blank',
            );
          }}
        />
      </div>
    </div>
  );
};

export default EventHeader;
