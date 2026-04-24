import Image from 'next/image';

import logo from '../images/logo.svg';

export function Logo() {
  return (
    <Image
      src={logo}
      alt='Logo'
      loading='eager'
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
    />
  );
}
