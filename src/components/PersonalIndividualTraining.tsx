import Image from 'next/image';
import { ListComponent } from './ListComponent';
import personalIndividualTraining from '../images/personalIndividualTraining.jpg';

const trainings = [
  'Leadership Development',
  'Soft Skill Development',
  'Industry Specific Knowledge',
  'Technical Skills Enhancement',
  'Time Management and Productivity',
  'Career Development',
];

export function PersonalIndividualTraining() {
  return (
    <section className='px-4'>
      <div className='max-w-360 w-full mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-y-6'>
        {/* Heading- mobile */}
        <h2 className='text-[20px] md:hidden sm:text-center font-semibold'>
          Personal Individual Training
        </h2>

        {/* image */}
        <div className='flex items-center justify-center md:justify-start'>
          <div className='relative h-82 w-82 md:w-151 md:h-87'>
            <Image
              src={personalIndividualTraining}
              alt='Personal Individual Training'
              fill
              className='rounded-xl object-cover'
            />
          </div>
        </div>

        {/* Content */}
        <div className='p-4 rounded-sm space-y-5'>
          <h2 className='text-[20px] hidden lg:block font-semibold'>
            Personal Individual Training
          </h2>
          <p>
            Begin a journey of lifelong learning and professional development
            with Tobams Group&apso;s diverse range of training programs for
            individuals. From technical skills mastery to soft skills
            enhancement, our courses cover a wide spectrum of topics to meet the
            evolving needs of today&apos;s professionals.
          </p>

          <div>
            <ListComponent items={trainings} />
          </div>
        </div>
      </div>
    </section>
  );
}
