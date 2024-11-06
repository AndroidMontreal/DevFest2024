// Session component
import { scheduleData } from '@/data/scheduleData';
import { sessions2024Data } from '@/data/sessions2024Data';
import { speakers2024 } from '@/data/speakers2024Data';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarPlus, FaRegIdBadge } from 'react-icons/fa';
import { MdOutlineFastfood } from 'react-icons/md';
import { PiCoffee } from 'react-icons/pi';
import { TbNotes } from 'react-icons/tb';

function generateGoogleCalendarLink(event) {
  const startTime = (event.start).toISOString().replace(/-|:|\.\d+/g, "");
  const endTime = (event.end).toISOString().replace(/-|:|\.\d+/g, "");

  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startTime}/${endTime}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
}

export const ScheduleSessionCard = ({ timeSlot, session, sessionIndex }) => {
  const sessionDetails = sessions2024Data.find(
    (s) => s.uuid === session.sessionUUID,
  );

  const speakers = sessionDetails?.speakerUUID?.map((speakerId) =>
    speakers2024.find((speaker) => speaker.uuid === speakerId),
  );

  const room = scheduleData.rooms.find(
    (r) =>
      r.uuid ===
      session.roomUUID,
  );

  const sessionClassName = timeSlot.commonAllRooms
    ? 'col-start-2 col-end-[-1]'
    : '';

  return (
    <div
      key={sessionIndex}
      className={`p-5 relative h-full flex flex-col overflow-hidden justify-between border border-[#e2e2e2] hover:bg-[#f7f7f7] hover:cursor-pointer rounded-lg text-left ${sessionClassName}`}
    >
      <div className="flex flex-col justify-between items-start"> {/* Add a flex container */}
        <div className="flex flex-row justify-between w-full">
          <div className="flex items-center gap-2">
            {room?.name}
          </div>
          <div>{!timeSlot.icon &&
            <FaCalendarPlus className="w-6 h-6 text-[#424242]"
              onClick={() => {
                const link = generateGoogleCalendarLink({
                  title: `${room?.name}: ${sessionDetails?.title}`,
                  start: new Date(`2024-11-09T${timeSlot.startTime}-05:00`),
                  end: new Date(`2024-11-09T${timeSlot.endTime}-05:00`),
                  description: sessionDetails?.description,
                  location: room?.name,
                });
                window.open(link, '_blank');
              }}
            />}
          </div>
        </div>
        <h5 className="text-xl mb-2 tracking-normal text-[#424242]">
          {sessionDetails?.title || 'Session Title'}
        </h5>
        <div className="font-medium text-sm">{sessionDetails?.shortDescription || sessionDetails?.description}</div>
        {/* Add the icon */}
      </div>

      <div className="-bottom-4 right-8 absolute">
        {timeSlot.icon === 'FaRegIdBadge' &&
          <FaRegIdBadge className="w-28 h-28 text-[#e2e2e2] opacity-40" />}
        {timeSlot.icon === 'TbNotes' &&
          <TbNotes className="w-28 h-28 text-[#e2e2e2] opacity-40" />}
        {timeSlot.icon === 'MdOutlineFastfood' &&
          <MdOutlineFastfood className="w-28 h-28 text-[#e2e2e2] opacity-40" />}
        {timeSlot.icon === 'PiCoffee' &&
          <PiCoffee className="w-28 h-28 text-[#e2e2e2] opacity-40" />}
      </div>
      {speakers?.length > 0 && <div className='mt-8'></div>}
      <div className="flex flex-col">
        {speakers?.map((speaker, speakerIndex) => (
          <Link key={speakerIndex} href={`/speakers/${speaker.slug}`}>
            <div className="flex items-center mb-4">
              <Image
                src={speaker?.image || '/default-speaker-image.jpg'}
                alt={speaker?.name || 'Speaker Name'}
                className="w-14 h-14 rounded-md mr-2 shadow aspect-square object-cover"
                width={52}
                height={52}
              />
              <div className="w-2/3">
                <p className="text-md opacity-70">
                  {speaker?.name || 'Speaker Name'}
                </p>
                <p className="text-xs opacity-70">
                  {speaker?.title || 'Speaker Company'}
                </p>
              </div>
            </div>
          </Link>
        ))}
        {
          sessionDetails.tags && <div className="flex">
            {sessionDetails.tags.map((tag, tagIndex) => (
              <Link key={tagIndex} href={`/schedule?tags=${tag.toLocaleLowerCase()}`}>
                <div key={tagIndex} className="bg-[#f1f1f1] text-[#424242] text-xs px-2 py-1 rounded-md mr-2">
                  {tag}
                </div>
              </Link>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

