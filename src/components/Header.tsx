'use client';

import { ChevronIcon } from './icons/ChevronIcon';
import { UserIcon } from './icons/UserIcon';
import { Navbar } from './Navbar';
import { useState } from 'react';
import { MobileNavbar } from './MobileNavbar';
import { HamburgerMenu } from './icons/HamburgerMenu';
import { Logo } from './Logo';

export function Header() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((open) => !open);
  return (
    <header className='fixed top-0 z-50 mx-auto flex w-full bg-background items-center justify-between shadow'>
      <div className='pt-4 flex-1'>
        {/* Top */}
        <div className='flex justify-between items-center w-full max-w-360 mx-auto px-4'>
          <Logo />

          <div className='items-center gap-4 hidden lg:flex'>
            <button className='flex items-center gap-2 bg-primary text-background py-1.25 px-4 rounded-sm text-sm'>
              <span className='py-1 px-2 rounded-full flex items-center justify-center overflow-hidden bg-background'>
                <UserIcon />
              </span>
              <span>Account</span>
              <ChevronIcon />
            </button>

            <button className='bg-secondary text-background py-2 px-4 rounded-sm text-sm'>
              Take Assessment
            </button>
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
            className='fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity'
            onClick={toggleOpen}
          />
        )}
      </div>
    </header>
  );
}
