import Image from 'next/image';

import { ListComponent } from './ListComponent';

import { personalIndividualTrainings } from '@/constants';

import personalIndividualTraining from '../images/personalIndividualTraining.jpg';

export function PersonalIndividualTraining() {
  return (
    <section className='px-4 md:px-8 lg:px-16'>
      <div className='max-w-8xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-6 md:gap-16'>
        {/* Heading- mobile */}
        <h2 className='text-[20px] sm:text-3xl md:text-4xl lg:hidden font-semibold'>
          Personal Individual Training
        </h2>

        <div className='flex items-center justify-center lg:justify-start'>
          <div className='relative h-82 w-full lg:w-151 lg:h-87'>
            <Image
              src={personalIndividualTraining}
              alt='Personal Individual Training'
              fill
              className='rounded-xl object-cover'
            />
          </div>
        </div>

        <div className='rounded-sm space-y-5'>
          <h2 className='text-[40px] hidden lg:block font-semibold'>
            Personal Individual Training
          </h2>
          <p>
            Begin a journey of lifelong learning and professional development
            with Tobams Group&apos;s diverse range of training programs for
            individuals. From technical skills mastery to soft skills
            enhancement, our courses cover a wide spectrum of topics to meet the
            evolving needs of today&apos;s professionals.
          </p>

          <div>
            <ListComponent items={personalIndividualTrainings} />
          </div>
        </div>
      </div>
    </section>
  );
}
