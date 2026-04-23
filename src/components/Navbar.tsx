import Link from 'next/link';
import { ChevronIcon } from './icons/ChevronIcon';
import { navLinks } from '@/constants';

export function Navbar() {
  return (
    <nav className='hidden lg:block'>
      <div className='w-fit mx-auto flex items-center gap-8 px-6 py-5'>
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className='flex items-center gap-2 text-foreground transition-all duration-200 hover:text-primary border-b border-transparent hover:border-primary'
          >
            <span>{link.label}</span>
            {link.hasChevron && <ChevronIcon className='text-primary' />}
          </Link>
        ))}
      </div>
    </nav>
  );
}
