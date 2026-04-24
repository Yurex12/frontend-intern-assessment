import Image from 'next/image';
import React from 'react';

import logo from '../images/logo.svg';

export function Logo() {
  return <Image src={logo} alt='Logo' />;
}
