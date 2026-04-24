'use client';

import Image from 'next/image';
import Link from 'next/link';
import ceoImage from '../images/ceoImage.jpg';
import { ArrowRightUp } from './icons/ArrowRightUp';

const topicsTabs = [
  'Strategic Career Guidance',
  'Leadership Development',
  'CV Development',
  'Sustainability Leadership',
  'Communication Skills',
  'Business Model',
];

export function LearningWithOurCeo() {
  return (
    <section className='px-4 py-10 md:py-20 bg-primary-muted'>
      <div className='max-w-360 w-full mx-auto'>
        <div>
          {/* Subheading */}
          <p className='text-[#1671D9] mb-2 italic font-medium'>
            Learning With Our CEO:
          </p>

          {/* Main Heading */}
          <h2 className='text-[20px] md:text-[32px] text-primary font-medium mb-6'>
            Transformation Hub With Jite Newton
          </h2>

          {/* Description */}
          <p>
            Transformation Hub with Jite Newton is a flagship webinar series
            curated by the CEO, Dr. Jite Newton. Designed to elevate career
            trajectories and leadership capabilities, this exclusive event
            offers invaluable insights and strategies for personal and
            professional growth. Whether you&apos;re seeking to advance your
            career or enhance your leadership skills, the Transformation Hub
            provides a transformative learning experience to unlock your full
            potential and drive success in your endeavours.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-y-6 rounded-md py-8'>
          <div>
            <div className='relative w-80 h-96 md:w-[560px] md:h-[340px]'>
              <Image
                src={ceoImage}
                alt='CEO Image'
                fill
                className='rounded-2xl object-cover'
              />
            </div>
          </div>

          <div className='space-y-4'>
            {/* Cards Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
              {topicsTabs.map((topic) => (
                <div
                  key={topic}
                  className='bg-white rounded-lg p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow'
                >
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='shrink-0'
                  >
                    <path
                      d='M13 2L3 14H12L11 22L21 10H12L13 2Z'
                      fill='#480F39'
                    />
                  </svg>
                  <span className='text-sm font-medium text-foreground'>
                    {topic}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href='#'
              className='inline-flex items-center gap-2 bg-primary text-background py-3 px-6 rounded-md font-medium transition-all duration-200 hover:opacity-90 w-fit'
            >
              Learn More
              <ArrowRightUp />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

<div className='grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-12 items-center'>
  {/* Left: Image */}
  <div className='flex items-center justify-center lg:order-1'></div>

  {/* Right: Content */}
</div>;
