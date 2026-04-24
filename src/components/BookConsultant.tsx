'use client';

import Link from 'next/link';

export function BookConsultant() {
  return (
    <section className='px-4'>
      <div className='w-full max-w-284 mx-auto bg-primary p-10 rounded-sm'>
        <div className='text-center space-y-4 text-white'>
          <h3 className='font-medium '>
            Want to accelerate professional growth and development at your
            organisation?
          </h3>
          <h3 className='font-semibold'>See how we can help.</h3>
          <div>
            <Link
              href='#'
              className='inline-flex items-center justify-center  bg-background px-8 py-3 text-sm font-semibold text-[#480F39] transition duration-200 hover:opacity-90'
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
