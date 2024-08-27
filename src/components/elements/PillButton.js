'use client';
import { clsx } from '@/lib/utils';

const Button = ({
                  id,
                  label = 'Click',
                  type = 'button',
                  action = 'primary',
                  disabled = false,
                  aria_label = label,
                  className = '',
                  onClick, // Add onClick prop for handling click events
                }) => {
  return (
    <button
      id={id}
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={aria_label}
      className={clsx(
        'px-6 py-2.5 text-base font-medium shadow-sm w-fit rounded-full',
        action === 'primary' &&
        'bg-black text-white hover:bg-black/80 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black',
        action === 'secondary' &&
        'bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-200 border border-gray-200',
        action === 'tertiary' &&
        'bg-transparent text-gray-500 hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black shadow-none',
        disabled && 'opacity-50 cursor-not-allowed',
        className,
      )}
    >
      {label}
    </button>
  );
};

export default Button;
