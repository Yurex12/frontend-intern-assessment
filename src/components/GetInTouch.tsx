'use client';

import Link from 'next/link';

export function GetInTouch() {
  return (
    <section className='px-4 py-12 md:py-16 bg-[#1D0617] border-b-2 border-background'>
      <div className='max-w-360 w-full mx-auto text-white'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-6'>
          {/* Left: Text Content */}
          <div>
            <h3 className='mb-2 font-normal'>
              Ready to be a part of something extraordinary?
            </h3>
            <h2 className='font-medium text-[32px]'>
              Let&apos;s work together to create a difference
            </h2>
          </div>

          {/* Right: CTA Button */}
          <div className='shrink-0'>
            <Link
              href='#'
              className='inline-block bg-primary text-white px-8 py-3 rounded-md transition-colors duration-200'
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
