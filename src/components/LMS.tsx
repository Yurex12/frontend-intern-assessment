'use client';

import Image from 'next/image';
import Link from 'next/link';
import lmsImage from '../images/lms.jpg';
import { ArrowRightUp } from './icons/ArrowRightUp';

const courses = [
  'Business Analysis',
  'Design Thinking',
  'Effective Communication',
  'Entrepreneurship',
  'Career Development',
  'Business Model',
];

export function LMS() {
  return (
    <section className='bg-primary-muted py-10 px-4'>
      <div className='max-w-360 w-full mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-y-6'>
        {/* heading */}
        <h2 className='text-[20px] md:hidden text-primary sm:text-center'>
          Learning Management System
        </h2>
        {/* image */}
        <div>
          <div className='relative h-82 w-82 md:w-139 md:h-142 mx-auto'>
            <Image
              src={lmsImage}
              alt='Learning Management System'
              fill
              className='rounded-full object-cover'
            />
          </div>
        </div>

        {/* content */}
        <div className='space-y-6'>
          <h2 className='hidden md:block text-3xl md:text-4xl font-bold text-primary'>
            Learning Management System
          </h2>

          <div className='bg-primary-muted p-4 rounded-sm space-y-6'>
            {/* Description */}
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

            {/* CTA Button */}
            <Link
              href='#'
              className='bg-primary text-background py-3 px-6 rounded-sm text-sm flex lg:hidden gap-x-2 w-fit items-center justify-center'
            >
              Learn More
              <ArrowRightUp />
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href='#'
            className='bg-primary text-background py-3 px-6 rounded-sm text-sm hidden lg:flex gap-x-2 w-fit items-center justify-center'
          >
            Learn More
            <ArrowRightUp />
          </Link>
        </div>
      </div>
    </section>
  );
}
