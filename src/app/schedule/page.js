import { scheduleData } from '@/data/scheduleData';
import { Fragment } from 'react';
import { ScheduleSessionCard } from '@/components/elements/ScheduleSessionCard';
import TitleWithSubtitle from '@/components/elements/TitleWithSubtitle';

export default function Schedule() {

  return (
    <div className="container mx-auto p-4 my-24">

      <TitleWithSubtitle
        title="Schedule"
        subTitle={`Discover the power of converging AI, mobile, and cloud technologies at DevFest Montreal on ${scheduleData.dateReadable}`}
        titleClassName="max-w-2xl"
        subTitleClassName="max-w-xl" />


      <div className="py-8 md:mt-4 grid gap-x-4 gap-y-4 md:gap-y-6 xl:grid-cols-[max-content_1fr_1fr_1fr]">

        {/* Empty div for the top-left corner */}
        <div></div>

        {scheduleData.rooms.map((room) => (
          room.name && <div className="font-medium text-lg ml-3" key={room.uuid}>{room.name}</div>
        ))}

        {scheduleData.timeSlots.map((timeSlot, timeIndex) => (

          <Fragment key={timeIndex}>

            {/* Render time slot */}

            <div className="mt-6 md:mt-4 text-2xl lg:text-xl tabular-nums text-neutral-950">
              <span className="opacity-80">{timeSlot.startTime}</span>
              <span className="xl:block opacity-50">
                <span className="xl:hidden"> - </span>
                {timeSlot.endTime}
              </span>
            </div>

            {/* Render sessions within the same time slot */}
            {timeSlot.sessions.map((session, sessionIndex) => (
              <ScheduleSessionCard
                key={sessionIndex}
                timeSlot={timeSlot}
                session={session}
                sessionIndex={sessionIndex}
              />
            ))}


          </Fragment>
        ))}
      </div>
    </div>
  );
}
