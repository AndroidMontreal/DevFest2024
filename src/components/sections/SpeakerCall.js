'use client';
import TitleWithSubtitle from '@/components/elements/TitleWithSubtitle';
import PillButton from '@/components/elements/PillButton';

const SpeakerCall = () => {
  return (
    <div className="flex flex-col gap-6 text-center items-center justify-center my-10">
      <TitleWithSubtitle
        title="Call for Speakers"
        subTitle="Got a groundbreaking idea or tech innovation to share? We got just the platform for you to join us as a speaker and make an impact!"
        titleClassName="max-w-2xl"
        subTitleClassName="max-w-xl" />
      <PillButton onClick={() => {
        window.open('https://discord.gg/zhSqkWTS', '_blank');
      }} label="Submit your proposal" />

    </div>
  );
};

export default SpeakerCall;
