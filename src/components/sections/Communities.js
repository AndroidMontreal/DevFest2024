'use client';
import CommunityCard from '@/components/elements/CommunityCard';
import TitleWithSubtitle from '@/components/elements/TitleWithSubtitle';
import { communities } from '@/data/communitiesData';

const Communities = () => {
  return (
    <div className="flex flex-col gap-6 text-center items-center justify-center my-10">
      <TitleWithSubtitle
        title="Communities"
        subTitle="A joint effort with Montreal's leading tech communities"
        titleClassName="max-w-xl"
        subTitleClassName="max-w-lg" />
      <CommunityCard communities={communities} />
    </div>
  );
};

export default Communities;
