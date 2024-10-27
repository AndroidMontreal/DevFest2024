// Session component
import { sessions2024Data } from '@/data/sessions2024Data';
import { speakers2024 } from '@/data/speakers2024Data';
import Image from 'next/image';
import { GoChecklist } from 'react-icons/go';
import { FaRegIdBadge } from 'react-icons/fa';
import { MdOutlineFastfood } from 'react-icons/md';
import { TbNotes } from 'react-icons/tb';
import { PiCoffee } from 'react-icons/pi';

export const ScheduleSessionCard = ({ timeSlot, session, sessionIndex }) => {
  const sessionDetails = sessions2024Data.find(
    (s) => s.uuid === session.sessionUUID,
  );

  const speakers = sessionDetails?.speakerUUID?.map((speakerId) =>
    speakers2024.find((speaker) => speaker.uuid === speakerId),
  );

  const sessionClassName = timeSlot.commonAllRooms
    ? 'col-start-2 col-end-[-1]'
    : '';

  return (
    <div
      key={sessionIndex}
      className={`p-5 relative h-full flex flex-col overflow-hidden justify-between border border-[#e2e2e2] hover:bg-[#f7f7f7] hover:cursor-pointer rounded-lg text-left ${sessionClassName}`}
    >
      <div className="flex justify-between items-start"> {/* Add a flex container */}
        <h5 className="mb-24 text-xl  tracking-normal text-[#424242]">
          {sessionDetails?.title || 'Session Title'}
        </h5>
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


      {speakers?.map((speaker, speakerIndex) => (
        <div key={speakerIndex} className="flex items-center mb-4">
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
      ))}    </div>
  );
};

