import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { ComponentProps } from 'react';

export function LinkButton({
  className,
  children,
  href = '#',
}: ComponentProps<'a'>) {
  return (
    <Link
      href={href}
      className={cn(
        'text-center bg-primary text-background py-2 px-4 rounded-sm text-sm cursor-pointer w-fit transition-all duration-200 hover:opacity-90',
        className,
      )}
    >
      {children}
    </Link>
  );
}
