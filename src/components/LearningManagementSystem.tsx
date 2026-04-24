import Image from 'next/image';

import { LinkButton } from './LinkButton';

import { ArrowRightUp } from './icons/ArrowRightUp';

import { courses } from '@/constants';

import lmsImage from '../images/lms.jpg';

export function LearningManagementSystem() {
  return (
    <section className='bg-primary-muted py-8 px-4 md:px-8 lg:px-16'>
      <div className='max-w-8xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-16'>
        {/* Mobile heading */}
        <h2 className='text-[20px] font-semibold sm:text-3xl md:text-4xl lg:hidden text-primary sm:text-center'>
          Learning Management System
        </h2>

        <div className='flex items-center justify-center'>
          <div className='relative h-82 w-82 lg:w-139 lg:h-142'>
            <Image
              src={lmsImage}
              alt='Learning Management System'
              fill
              className='rounded-full object-cover'
            />
          </div>
        </div>

        <div className='space-y-6'>
          <h2 className='hidden lg:block lg:text-[40px] font-semibold text-primary'>
            Learning Management System
          </h2>

          <div className='bg-primary-muted p-4 rounded-sm space-y-6'>
            <p>
              TG Academy is a hub of knowledge and skill-building resources
              designed to empower tech talents on their learning journey. From
              technical courses covering the latest programming languages and
              development frameworks to soft skills training in leadership,
              effective communication and project management, TG Academy offers
              a wide range of courses to cater to diverse learning needs. With
              accessible and interactive learning materials, individuals can
              enhance their skills and stay ahead in today&apos;s competitive
              tech landscape.
            </p>

            <div className='space-y-2'>
              <h3 className='font-semibold text-primary'>
                Some of our courses include:
              </h3>
              <ul className='flex flex-col md:flex-row md:flex-wrap gap-2 md:gap-4 list-disc list-inside px-2'>
                {courses.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </div>

            <LinkButton className='py-3 px-6 flex lg:hidden gap-x-2 items-center justify-center'>
              Learn More
              <ArrowRightUp />
            </LinkButton>
          </div>

          <LinkButton className='py-3 px-6 hidden gap-x-2 lg:flex lg:items-center lg:justify-center'>
            Learn More
            <ArrowRightUp />
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
