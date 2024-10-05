import TitleWithSubtitle from '@/components/elements/TitleWithSubtitle';
import { team } from '@/data/teamData';
import TeamMemberCard from '@/components/elements/TeamMemberCard';
import { sortTeamByFirstName } from '@/lib/utils';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {

  const sortedTeam = sortTeamByFirstName(team); // Use the imported function

  return (
    <div id="speakers" className="flex flex-col gap-6 text-center items-center justify-center my-24">
      <TitleWithSubtitle
        title="Team"
        subTitle="GDG Montreal team is all composed of volunteers who think that empowering, encouraging and inspiring women in tech is important."
        titleClassName="max-w-2xl"
        subTitleClassName="max-w-xl" />

      <ul className=" py-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {sortedTeam.map(member => (
          <li key={uuidv4()} className="flex items-start">
            <TeamMemberCard member={member} />
          </li>
        ))}
      </ul>

    </div>
  );
}
