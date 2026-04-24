import Image from 'next/image';

import { LinkButton } from './LinkButton';

import hero from '../images/hero.jpg';

export function Hero() {
  return (
    <section className='relative w-full h-79 md:h-110 mt-20 lg:mt-32 lg:h-128 flex items-center justify-center overflow-hidden text-background'>
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
          <span className='px-10 py-3 bg-background/5 backdrop-blur-xl rounded-full text-xs '>
            WHAT WE DO
          </span>
        </div>

        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-bold mb-4'>
          Training and Development
        </h1>

        <p className='mb-8'>
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today&apos;s ever-evolving landscape.
        </p>

        <LinkButton className='py-3'>Book a Consultation</LinkButton>
      </div>
    </section>
  );
}
