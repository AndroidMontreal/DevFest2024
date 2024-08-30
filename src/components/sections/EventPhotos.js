'use client';
import TitleWithSubtitle from '@/components/elements/TitleWithSubtitle';
import { eventPhotos } from '@/data/data';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import PillButton from '@/components/elements/PillButton';
import styles from './EventPhotos.module.css';


const EventPhotos = () => {
  return (
    <div className="flex flex-col gap-8 text-center items-center justify-center my-10">
      <TitleWithSubtitle
        title="DevFest 2023 was so much fun."
        subTitle="Last year, we had 200+ attendees, 10+ speakers, 10+ sessions, and 1 amazing event."
        titleClassName="max-w-2xl"
        subTitleClassName="max-w-xl" />
      <div className={`${styles.container}`}>
        {eventPhotos.map((eventPhoto) => (
          <Image
            src={eventPhoto.image}
            alt={eventPhoto.title}
            key={uuidv4()}
            className={`rounded-2xl bg-white ${styles.child} object-contain`}
            width={0} // Adjust width as needed
            height={0} // Adjust height as needed
            style={{ width: '100%', height: 'auto' }} // optional
          />
        ))}
      </div>

      <PillButton onClick={() => {
        window.open('https://photos.app.goo.gl/x9j7BH3nK8TQJLpi6', '_blank');
      }} label="All pictures" />
    </div>
  );
};

export default EventPhotos;
