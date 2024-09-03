import Image from 'next/image';

const SpeakerCard = ({ speaker }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 border-2 border-gray-200 rounded-lg w-80 h-80">
      <Image
        className="rounded-full w-40 h-40 object-cover"
        src={speaker.image}
        alt={`${speaker.name}'s avatar`}
        width={96}
        height={96}
      />
      <div className="mt-4">
        <h3 className="text-lg font-bold">{speaker.name}</h3>
        <p className="text-sm">{speaker.title}</p>
      </div>
    </div>
  );
}

export default SpeakerCard;