'use client';
import TitleWithSubtitle from '@/components/elements/TitleWithSubtitle';
import PillButton from '@/components/elements/PillButton';
import { organizers } from '@/data/data';
import OrganizersCard from '@/components/elements/OrganizersCard';

const Organizers = () => {
  return (
    <div className="flex flex-col gap-6 text-center items-center justify-center my-10">
      <TitleWithSubtitle
        title="Organizers"
        subTitle="A joint effort with Montreal's leading tech communities"
        titleClassName="max-w-xl"
        subTitleClassName="max-w-lg" />

      <OrganizersCard organizers={organizers} />

      <PillButton onClick={() => {
        window.open('https://www.papercall.io/devfest-2023-mtl', '_blank');
      }} label="Call for paper" />

    </div>


  );
};

export default Organizers;
