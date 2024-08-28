'use client';
import TitleWithSubtitle from '@/components/elements/TitleWithSubtitle';
import PillButton from '@/components/elements/PillButton';
import { sponsors } from '@/data/data';
import SponsorCard from '@/components/elements/SponsorCard';

const Sponsors = () => {
  return (
    <div className="flex flex-col gap-6 text-center items-center justify-center my-10">
      <TitleWithSubtitle
        title="Our Previous Sponsors"
        subTitle="Let's Make a Difference Together! Become Our Community Sponsor."
        titleClassName="max-w-4xl"
        subTitleClassName="max-w-xl" />

      <SponsorCard sponsors={sponsors} />

      <PillButton onClick={() => {
        window.open('https://devfest2023.gdgmontreal.com/wp-content/uploads/2023/09/Sponsorship_proposal_en-1.pdf', '_blank');
      }} label="Sponsorship Proposal" />

    </div>


  );
};

export default Sponsors;
