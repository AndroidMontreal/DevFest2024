import EventHeader from '@/components/sections/EventHeader';
import Communities from '@/components/sections/Communities';
import Sponsors from '@/components/sections/Sponsors';
import EventPhotos from '@/components/sections/EventPhotos';
import { eventHeader, venue } from '@/data/data';
import Venue from '@/components/sections/Venue';

export default function Home() {
  return (
    <div className="flex flex-col justify-around gap-20">
      <EventHeader eventData={eventHeader} />
      <EventPhotos />
      <Sponsors />
      <Communities />
      <Venue venueData={venue} />
    </div>
  );
}
