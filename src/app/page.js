import Image from 'next/image';
import Header from '@/components/sections/Header';
import EventHeader from '@/components/sections/EventHeader';
import SpeakerCall from '@/components/sections/SpeakerCall';
import Organizers from '@/components/sections/Organizers';
import Sponsors from '@/components/sections/Sponsors';
import EventPhotos from '@/components/sections/EventPhotos';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="container flex mx-auto px-5 py-2 flex-col">
      <Header />
      <div className="flex flex-col gap-20">
        <EventHeader />
        <SpeakerCall />
        <EventPhotos />
        <Sponsors />
        <Organizers />
        <Footer />
      </div>
    </main>
  );
}
