import Header from '@/components/sections/Header';
import EventHeader from '@/components/sections/EventHeader';
import Speakers from '@/components/sections/Speakers';
import Communities from '@/components/sections/Communities';
import Sponsors from '@/components/sections/Sponsors';
import EventPhotos from '@/components/sections/EventPhotos';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="container flex mx-auto px-5 py-2 flex-col">
      <Header />
      <div className="flex flex-col gap-20">
        <EventHeader />
        <Speakers />
        <EventPhotos />
        <Sponsors />
        <Communities />
        <Footer />
      </div>
    </main>
  );
}
