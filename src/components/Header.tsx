'use client';

import { useState } from 'react';

import { Logo } from './Logo';
import { MobileNavbar } from './MobileNavbar';
import { Navbar } from './Navbar';

import { ChevronIcon } from './icons/ChevronIcon';
import { UserIcon } from './icons/UserIcon';
import { HamburgerMenu } from './icons/HamburgerMenu';
import { LinkButton } from './LinkButton';

export function Header() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((open) => !open);
  return (
    <header className='fixed top-0 z-50 mx-auto flex w-full bg-background items-center justify-between shadow'>
      <div className='pt-4 flex-1'>
        <div className='flex justify-between items-center w-full max-w-8xl mx-auto px-4 lg:px-2'>
          <Logo />

          <div className='items-center gap-4 hidden lg:flex'>
            <LinkButton className='flex items-center gap-2 bg-primary py-1.25'>
              <span className='py-1 px-2 rounded-full flex items-center justify-center overflow-hidden bg-background'>
                <UserIcon />
              </span>
              <span>Account</span>
              <ChevronIcon />
            </LinkButton>

            <LinkButton className='bg-secondary'>Take Assessment</LinkButton>
          </div>

          {/* HamburgerMenu */}
          <div className='lg:hidden'>
            <button onClick={toggleOpen}>
              <HamburgerMenu />
            </button>
          </div>
        </div>

        <div className='border-b border-foreground/10'></div>

        <Navbar />

        <MobileNavbar onToggleOpen={toggleOpen} open={open} />

        {open && (
          <div
            className='fixed inset-0 z-40 bg-foreground/40 backdrop-blur-sm transition-opacity'
            onClick={toggleOpen}
          />
        )}
      </div>
    </header>
  );
}
