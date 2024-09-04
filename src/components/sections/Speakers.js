'use client';
import SpeakerCard from '@/components/elements/SpeakerCard';
import YearSelector from '@/components/elements/YearSelector';
import PillButton from '@/components/elements/PillButton';
import TitleWithSubtitle from '@/components/elements/TitleWithSubtitle';
import { speakers2023, speakers2024 } from '@/data/data';
import { useState } from 'react';

const Speakers = () => {
  const [selectedYear, setSelectedYear] = useState(2024);

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const speakers = selectedYear === 2023 ? speakers2023 : speakers2024;

  return (
    <div className="flex flex-col gap-6 text-center items-center justify-center my-10">
      <TitleWithSubtitle
        title="Speakers"
        subTitle="Learn from the best in the industry. Our speakers are experts in their field and are excited to share their knowledge with you."
        titleClassName="max-w-2xl"
        subTitleClassName="max-w-xl" />

      <YearSelector years={[2023, 2024]} selectedYear={selectedYear} handleYearChange={handleYearChange} />

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {speakers.map(speaker => (
          <li key={speaker.name} className="flex items-center">
            <SpeakerCard speaker={speaker} />
          </li>
        ))}
      </ul>
      <PillButton onClick={() => {
        window.open('https://www.papercall.io/devfest-2024-mtl', '_blank');
      }} label="Submit your proposal" />
    </div>
  );
};

export default Speakers;
