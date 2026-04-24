import Image from 'next/image';

import { ListComponent } from './ListComponent';

import corporateTrainingsImg from '../images/corporateTrainings.jpg';

import { corporateTrainings } from '@/constants';

export function CorporateTrainings() {
  return (
    <section className='px-4 md:px-8 lg:px-16'>
      <div className='max-w-8xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-6 md:gap-16'>
        {/* mobile Heading*/}
        <h2 className='text-[20px] sm:text-3xl md:text-4xl lg:hidden font-semibold'>
          Corporate Trainings
        </h2>

        <div className='lg:order-2 flex items-center justify-center lg:justify-end'>
          <div className='relative h-82 w-full lg:w-151 lg:h-87'>
            <Image
              src={corporateTrainingsImg}
              alt='Corporate Trainings'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              fill
              className='rounded-4xl object-cover'
            />
          </div>
        </div>

        <div className='rounded-sm space-y-4 lg:order-1'>
          <h2 className='text-[40px] hidden lg:block font-semibold'>
            Corporate Trainings
          </h2>
          <p>
            Empower your team with our customised Corporate Training programs
            designed to address the unique needs and objectives of your
            organisation. Our expert facilitators work closely with your team to
            deliver tailored learning experiences that align with your
            company&apos;s goals and values.
          </p>

          <ListComponent items={corporateTrainings} />
        </div>
      </div>
    </section>
  );
}
