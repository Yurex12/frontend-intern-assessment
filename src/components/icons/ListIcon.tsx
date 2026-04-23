import { cn } from '@/lib/utils';

interface IconProps {
  className?: string;
}

export function ListIcon({ className }: IconProps) {
  return (
    <svg
      width='14'
      height='18'
      viewBox='0 0 14 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('text-primary', className)}
    >
      <path
        d='M7.87302 0.761963V6.98419H13.2064L6.09524 16.762V10.5397H0.761909L7.87302 0.761963Z'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth='1.52381'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
