'use client';

import { LinkButton } from './LinkButton';

export function GetInTouch() {
  return (
    <section className='px-4 md:px-8 lg:px-16 py-12 md:py-16 bg-[#1D0617] border-b border-background'>
      <div className='max-w-8xl w-full mx-auto text-background'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-6'>
          <div>
            <h3 className='mb-2 font-normal'>
              Ready to be a part of something extraordinary?
            </h3>
            <h2 className='font-semibold text-[20px] lg:text-[32px]'>
              Let&apos;s work together to create a difference
            </h2>
          </div>

          <div className='shrink-0'>
            <LinkButton href='#' className='px-8 py-3'>
              Get In Touch
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
