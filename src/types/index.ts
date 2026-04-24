import { StaticImageData } from 'next/image';

export interface NavLink {
  label: string;
  href: string;
  hasChevron: boolean;
}

export interface MobileNavbarProps {
  open: boolean;
  onToggleOpen: VoidFunction;
}

export interface IconProps {
  className?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  image: StaticImageData;
  testimonial: string;
}
