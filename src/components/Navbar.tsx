import Link from 'next/link';
import { ChevronIcon } from './icons/ChevronIcon';

const links = [
  { label: 'About', href: '#', hasChevron: true },
  { label: 'What We Do', href: '#', hasChevron: true },
  { label: 'Jobs', href: '#', hasChevron: true },
  { label: 'Project', href: '#', hasChevron: false },
  { label: 'TG Academy', href: '#', hasChevron: false },
  { label: 'Strategic Partnership', href: '#', hasChevron: false },
  { label: 'Pricing', href: '#', hasChevron: false },
  { label: 'Book a Consultant', href: '#', hasChevron: false },
];

export function Navbar() {
  return (
    <nav className='hidden lg:block'>
      <div className='w-fit mx-auto flex items-center gap-8 px-6 py-5'>
        {links.map((link) => (
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
