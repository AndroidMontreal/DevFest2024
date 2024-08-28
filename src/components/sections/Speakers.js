'use client';
import TitleWithSubtitle from '@/components/elements/TitleWithSubtitle';
import PillButton from '@/components/elements/PillButton';

const Speakers = () => {
  return (
    <div className="flex flex-col gap-6 text-center items-center justify-center my-10">
      <TitleWithSubtitle
        title="Speakers"
        subTitle="Learn from the best in the industry. Our speakers are experts in their field and are excited to share their knowledge with you."
        titleClassName="max-w-2xl"
        subTitleClassName="max-w-xl" />
      <PillButton onClick={() => {
        window.open('https://www.papercall.io/devfest-2024-mtl', '_blank');
      }} label="Submit your proposal" />

    </div>
  );
};

export default Speakers;
