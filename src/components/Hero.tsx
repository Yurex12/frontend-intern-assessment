import Image from 'next/image';
import Link from 'next/link';

import hero from '../images/hero.jpg';

export function Hero() {
  return (
    <section className='relative w-full h-96 mt-20 lg:mt-32 lg:h-[511px] flex items-center justify-center overflow-hidden'>
      <Image
        src={hero}
        alt='Hero background'
        fill
        className='object-cover'
        priority
      />

      <div className='absolute inset-0 bg-foreground/70' />

      <div className='relative z-10 max-w-5xl mx-auto px-8 text-center'>
        <div className='inline-block mb-6'>
          <span className='px-6 py-2 bg-background/20 backdrop-blur-md rounded-full text-xs text-background'>
            WHAT WE DO
          </span>
        </div>

        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-background mb-4'>
          Training and Development
        </h1>

        <p className='text-background/90 mb-8 leading-relaxed'>
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today&apos;s ever-evolving landscape.
        </p>

        <Link
          href='#'
          className='inline-block bg-primary text-background py-3 px-4 rounded-sm text-sm'
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}
