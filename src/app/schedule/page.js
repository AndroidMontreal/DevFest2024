'use client';
import { ScheduleSessionCard } from '@/components/elements/ScheduleSessionCard';
import TitleWithSubtitle from '@/components/elements/TitleWithSubtitle';
import { scheduleData } from '@/data/scheduleData';
import { sessions2024Data } from '@/data/sessions2024Data';
import { useSearchParams, useRouter } from 'next/navigation';
import { Fragment, useMemo } from 'react';

const allTags = sessions2024Data.reduce((acc, session) => {
  session.tags?.forEach((tag) => {
    if (!acc.includes(tag.toLocaleLowerCase())) acc.push(tag.toLocaleLowerCase());
  });
  return acc;
}, []);
export default function Schedule() {
  const param = useSearchParams();
  const router = useRouter();
  const tags = param.getAll('tags');

  const timeSlots = useMemo(() =>
    tags.length > 0 ? scheduleData.timeSlots.reduce((acc, timeSlot) => {
      if (timeSlot.commonAllRooms) return [...acc, timeSlot];
      const sessions = timeSlot.sessions.filter(
        (session) => {
          const found = sessions2024Data.find((s) => s.uuid === session.sessionUUID);
          return found.tags?.find((tag) => tags.includes(tag.toLowerCase()));
        }
      );
      return sessions.length > 0 ? [...acc, { ...timeSlot, sessions }] : acc;
    }, []) : scheduleData.timeSlots,
    [tags]);
  return (
    <div className="container mx-auto p-4 my-16">

      <TitleWithSubtitle
        title="Schedule"
        subTitle={`Discover the power of converging AI, mobile, and cloud technologies at DevFest Montreal on ${scheduleData.dateReadable}`}
        titleClassName="max-w-2xl"
        subTitleClassName="max-w-xl" />

      {
        /* render tag filters */
        allTags.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-8 justify-center">
            {allTags.map((tag, index) => (
              <button
                key={index}
                className={`px-4 py-2 text-sm rounded-full border border-neutral-500 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-opacity-50 ${tags.includes(tag) ? 'bg-neutral-500 text-white' : 'text-neutral-500'}`}
                onClick={() => {
                  const newTags = tags.includes(tag)
                    ? tags.filter((t) => t !== tag)
                    : [...tags, tag];
                  router.push(`/schedule?${newTags.map((tag) => `tags=${tag.toLowerCase()}`).join('&')}`);
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        )
      }
      <div className={`py-8 grid gap-x-4 gap-y-4 md:gap-y-6 ${tags.length === 0 && 'lg:grid-cols-[max-content_1fr_1fr_1fr]'}`}>

        {/* Empty div for the top-left corner */}
        <div className='hidden' /><div className='hidden' /><div className='hidden' /><div className='hidden' />

        {timeSlots.map((timeSlot, timeIndex) => (
          <Fragment key={timeIndex}>

            {/* Render time slot */}
            <div className="text-2xl lg:text-xl tabular-nums text-neutral-950">
              <span className="opacity-80">{timeSlot.startTime}</span>
              <span className={`${tags.length === 0 && 'xl:block'} opacity-50`}>
                <span className={tags.length === 0 && "xl:hidden"}> - </span>
                {timeSlot.endTime}
              </span>
            </div>

            {/* Render sessions within the same time slot */}
            {timeSlot.sessions
              .map((session, sessionIndex) => (
                <ScheduleSessionCard
                  key={sessionIndex}
                  timeSlot={timeSlot}
                  session={session}
                  sessionIndex={sessionIndex} />
              ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
