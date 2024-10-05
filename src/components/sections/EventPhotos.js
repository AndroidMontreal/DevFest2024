'use client';
import TitleWithSubtitle from '@/components/elements/TitleWithSubtitle';
import { eventPhotos } from '@/data/eventPhotosData';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import PillButton from '@/components/elements/PillButton';


const EventPhotos = () => {
  return (
    <div className="flex flex-col gap-8 text-center items-center justify-center my-10">
      <TitleWithSubtitle
        title="Last Year at DevFest Montreal"
        subTitle="Last year, we had 200+ attendees, 10+ speakers, 10+ sessions, and 1 amazing event."
        titleClassName="max-w-4xl"
        subTitleClassName="max-w-xl" />
      <div
        className="columns-1 gap-6 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-3 [&>img:not(:first-child)]:mt-8 place-items-center place-content-center"
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

      <PillButton href="https://photos.app.goo.gl/x9j7BH3nK8TQJLpi6" label="All pictures" />
    </div>
  );
};

export default EventPhotos;
