// components/SpeakerDetails/SessionInfo.js
import { scheduleData } from '@/data/scheduleData';

export const SessionInfo = ({ session }) => {

  const timeSlot = scheduleData.timeSlots.find((ts) =>
    ts.sessions.some((s) => s.sessionUUID === session.uuid),
  );

  const room = scheduleData.rooms.find(
    (r) =>
      r.uuid ===
      timeSlot?.sessions.find((s) => s.sessionUUID === session.uuid).roomUUID,
  );

  const formattedStartTime = new Date(`2024-11-09 ${timeSlot.startTime}`).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const formattedEndTime = new Date(`2024-11-09 ${timeSlot.endTime}`).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return (
    <div key={session.uuid} id="sessionDetails" className="prose">
      <h2
        className="text-[min(7vw,40px)] leading-[1.3] tracking-tight font-semibold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700 mb-1">
        Session
      </h2>
      <h3
        className="text-[min(7vw,25px)] leading-[1.3] tracking-tight font-semibold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700 mt-6 mb-0">
        {session.title}
      </h3>
      <div className="flex mb-6">
        <p className="text-gray-600 m-0">
          {room?.name} (
          {formattedStartTime} ~ {formattedEndTime}
          )
        </p>
      </div>
      <div className="prose lg:prose-base">
        {session.description.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};
