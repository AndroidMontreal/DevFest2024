'use client'; // This component will need client-side interactions for the Swiper

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import TitleWithSubtitle from '@/components/elements/TitleWithSubtitle';
import { v4 as uuidv4 } from 'uuid';

const Venue = ({ venueData }) => {
  return (
    <section id="venue" className="container mx-auto px-4 py-12">

      <TitleWithSubtitle
        title="Event Venue"
        subTitle="Concordia University Conference Centre Housed at Sir George Williams campus in the heart of downtown Montreal, Concordia University Conference Centre opened its doors in Fall 2017."
        titleClassName="max-w-2xl"
        subTitleClassName="max-w-xl" />

      <div className="py-12 grid grid-cols-1 lg:grid-cols-2 gap-8"> {/* Grid layout */}

        {/* Left Column (Map) */}
        <div className="relative h-full"> {/* Adjust width as needed */}
          <div className="aspect-video h-full"> {/* Maintain aspect ratio for map embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.728385132924!2d-73.58400550876223!3d45.49541409649223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a6a52a5e115%3A0x7f6e51eeba31e9bc!2sConcordia%20University%2C%20John%20Molson%20Building!5e0!3m2!1sen!2sca!4v1726228096000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Event Venue"
            ></iframe>
          </div>
          <div className="absolute bottom-2 left-2 bg-white p-2 rounded-md shadow-md"> {/* Logo overlay */}
            <Image
              src={venueData.logo}
              alt={venueData.name + ' logo'}
              width={250}
              height={50}
            />
          </div>
        </div>

        {/* Right Column (Swiper Slider) */}
        <div className="h-[400px] lg:h-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]} // Add Swiper modules
            spaceBetween={50}
            navigation
            pagination={{ type: 'bullets', clickable: true }}
            slidesPerView={1} // Show one slide at a time
            autoplay={{ delay: 6000 }} // Autoplay with 3-second delay
            loop={true}
            className="h-full"
          >
            {venueData.images.map((image, index) => (
              <SwiperSlide key={uuidv4()} className="w-full h-[400px] lg:h-full">
                <Image
                  src={image}
                  alt={`Venue Image ${index + 1}`}
                  fill
                  className="rounded-lg "
                />
              </SwiperSlide>
            ))}
          </Swiper>{/* Navigation arrows */}


        </div>
      </div>
    </section>
  );
};

export default Venue;
