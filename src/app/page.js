import EventHeader from '@/components/sections/EventHeader';
import Communities from '@/components/sections/Communities';
import Sponsors from '@/components/sections/Sponsors';
import EventPhotos from '@/components/sections/EventPhotos';
import { eventHeader, venue } from '@/data/data';
import Venue from '@/components/sections/Venue';

export default function Home() {
  return (
    <div className="flex flex-col justify-around gap-20" >
      <section id="event" className="scroll-mt-20">
        <EventHeader eventData={eventHeader} />
      </section>
      <section id="photos" className="scroll-mt-20">
        <EventPhotos />
      </section>
      <section id="sponsors" className="scroll-mt-20">
        <Sponsors />
      </section>
      <section id="communities" className="scroll-mt-20">
        <Communities />
      </section>
      <Venue venueData={venue} />
    </div>
  );
}
