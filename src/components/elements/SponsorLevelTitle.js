import { clsx } from '@/lib/utils';

const SponsorLevelTitle = ({ title, level, titleClassName}) => {
  return (
    <div className="flex gap-6 flex-col place-items-center text-center">
      <h3
        className={clsx(
          'text-[min(12vw,60px)] leading-[1.3] tracking-tighter font-bold '+ textColorForLevel(level),
          titleClassName,
        )}
      >
        {title}
      </h3>
    </div>
  );
};

function textColorForLevel(level) {
  switch (level) {
    case 'platinum':
    return 'text-cyan-400';
    case 'gold':
      return 'text-yellow-400';
    case 'silver':
      return 'text-gray-400';
    case 'bronze':
       return 'text-yellow-700';
  }
}

export default SponsorLevelTitle;
