import Link from 'next/link';

import { LinkButton } from './LinkButton';

import { ChevronIcon } from './icons/ChevronIcon';
import { CloseIcon } from './icons/CloseIcon';
import { UserIcon } from './icons/UserIcon';

import { navLinks } from '@/constants';

import { MobileNavbarProps } from '@/types';

export function MobileNavbar({ onToggleOpen, open }: MobileNavbarProps) {
  return (
    <div
      className={`fixed top-0 h-dvh z-50 w-64 bg-background shadow flex flex-col transition-all duration-300 ${
        open ? 'right-0' : '-right-full'
      }`}
    >
      <div className='flex items-center justify-end p-2'>
        <button
          className='p-2 rounded-full hover:bg-background/10 transition-colors'
          onClick={onToggleOpen}
        >
          <CloseIcon />
        </button>
      </div>

      <ul className='flex flex-col gap-y-1 px-4'>
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              onClick={onToggleOpen}
              className='flex items-center gap-2 px-2 py-2 text-foreground transition-colors border-b border-transparent hover:border-primary hover:text-primary'
            >
              <span>{link.label}</span>
              {link.hasChevron && <ChevronIcon className='text-primary' />}
            </Link>
          </li>
        ))}
      </ul>

      <div className='mt-auto px-4 py-4 flex flex-col gap-3 border-t border-foreground/10'>
        <LinkButton className='flex items-center gap-2  w-full justify-center'>
          <span className='py-1 px-2 rounded-full flex items-center justify-center overflow-hidden bg-background'>
            <UserIcon />
          </span>
          <span>Account</span>
          <ChevronIcon />
        </LinkButton>

        <LinkButton className='bg-secondary w-full'>Take Assessment</LinkButton>
      </div>
    </div>
  );
}
