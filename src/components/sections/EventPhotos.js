'use client';
import TitleWithSubtitle from '@/components/elements/TitleWithSubtitle';
import { eventPhotos } from '@/data/data';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';


const EventPhotos = () => {
  return (
    <div className="flex flex-col gap-8 text-center items-center justify-center my-10">
      <TitleWithSubtitle
        title="DevFest 2023 was so much fun."
        subTitle="Last year, we had 200+ attendees, 10+ speakers, 10+ sessions, and 1 amazing event."
        titleClassName="max-w-2xl"
        subTitleClassName="max-w-xl" />
      <div
        className="columns-1 gap-6 sm:columns-2 sm:gap-8 md:columns-2 lg:columns-2 [&>img:not(:first-child)]:mt-8 place-items-center place-content-center"
      >
        {eventPhotos.map((eventPhoto) => {
          return (
            <Image
              key={uuidv4()}
              src={eventPhoto.image}
              alt={eventPhoto.title}
              className="rounded-2xl mt-6 bg-white w-auto"
              width={500} // Adjust width as needed
              height={300} // Adjust height as needed
            />
          );

        })}
      </div>

    </div>
  );
};

export default EventPhotos;
