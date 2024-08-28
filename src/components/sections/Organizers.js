'use client';
import OrganizersCard from '@/components/elements/OrganizersCard';
import TitleWithSubtitle from '@/components/elements/TitleWithSubtitle';
import { organizers } from '@/data/data';

const Organizers = () => {
  return (
    <div className="flex flex-col gap-6 text-center items-center justify-center my-10">
      <TitleWithSubtitle
        title="Organizers"
        subTitle="A joint effort with Montreal's leading tech communities"
        titleClassName="max-w-xl"
        subTitleClassName="max-w-lg" />
      <OrganizersCard organizers={organizers} />
    </div>
  );
};

export default Organizers;
