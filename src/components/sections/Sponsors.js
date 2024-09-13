'use client';
import TitleWithSubtitle from '@/components/elements/TitleWithSubtitle';
import SponsorLevelTitle from '@/components/elements/SponsorLevelTitle';
import PillButton from '@/components/elements/PillButton';
import { sponsors } from '@/data/data';
import SponsorCard from '@/components/elements/SponsorCard';

const Sponsors = () => {
  return (
    <div className="flex flex-col gap-6 text-center items-center justify-center my-10">
      <TitleWithSubtitle
        title="Our Sponsors"
        subTitle="Let's Make a Difference Together! Become Our Community Sponsor."
        titleClassName="max-w-4xl"
        subTitleClassName="max-w-xl" />


      <SponsorLevelTitle
        title="Gold"
        level="gold"
        titleClassName="max-w-4xl" />

      <SponsorCard sponsors={sponsors.filter(checkSponsorshipLevel('gold'))} />

      <PillButton
        href="https://docs.google.com/presentation/d/1ezmE9o9o-EXhEa_ofPospL9hFGxAYm8xtnV_0m3AqSo/edit?usp=sharing"
        label="Sponsorship Proposal" />

    </div>

  );
};

function checkSponsorshipLevel(level) {
  return function(partner) {
    return level === partner.level;
  };
}

export default Sponsors;
