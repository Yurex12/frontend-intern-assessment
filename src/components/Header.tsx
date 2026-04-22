import Image from 'next/image';
import logo from '../images/logo.svg';
import { ChevronIcon } from './icons/ChevronIcon';
import { UserIcon } from './icons/UserIcon';
import { Navbar } from './Navbar';

export function Header() {
  return (
    <header className='fixed top-0 z-50 mx-auto flex w-full items-center justify-between bg-background'>
      <div className='pt-4 flex-1 backdrop-blur'>
        {/* Top */}
        <div className='flex justify-between items-center w-full max-w-360 mx-auto px-4'>
          <Image src={logo} alt='Logo' />

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

          {/* HarmbuggerMenu */}
          <button className='lg:hidden'>Open</button>
        </div>

        <div className='border-b border-foreground/10'></div>

        <Navbar />
      </div>
    </header>
  );
}
