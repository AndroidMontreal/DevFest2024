import { clsx } from '@/lib/utils';

const TitleWithSubtitle = ({ title, subTitle, titleClassName, subTitleClassName }) => {
  return (
    <div className="flex gap-6 flex-col place-items-center text-center">
      <h2
        className={clsx(
          'text-[min(12vw,60px)] leading-[1.3] tracking-tighter font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700',
          titleClassName,
        )}
      >
        {title}
      </h2>
      <p className={clsx('font-normal text-gray-900', subTitleClassName)}>
        {subTitle}
      </p>
    </div>
  );
};

export default TitleWithSubtitle;
