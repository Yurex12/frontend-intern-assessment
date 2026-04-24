'use client';

import Image from 'next/image';
import ceoImage from '../images/ceoImage.jpg';
import { ArrowRightUp } from './icons/ArrowRightUp';
import { LinkButton } from './LinkButton';
import { topicsTabs } from '@/constants';
import { ListIcon } from './icons/ListIcon';

export function LearningWithOurCeo() {
  return (
    <section className='px-4 md:px-8 lg:px-16'>
      <div className='max-w-8xl w-full mx-auto p-5 lg:p-10 bg-[#EF435333] rounded-xl'>
        <div>
          {/* Mobile Heading */}
          <p className='text-[#1671D9] mb-2 italic font-medium'>
            Learning With Our CEO:
          </p>

          {/* Main Heading */}
          <h2 className='text-[20px] md:text-[32px] text-primary font-medium mb-6'>
            Transformation Hub With Jite Newton
          </h2>

          {/* Description */}
          <p className='mb-6'>
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

        <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-6 rounded-md'>
          <div className='flex items-center justify-center md:justify-start'>
            <div className='relative w-full h-96 lg:w-140 lg:h-85'>
              <Image
                src={ceoImage}
                alt='CEO Image'
                fill
                className='rounded-2xl object-cover'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </div>
          </div>

          <div className='space-y-4'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
              {topicsTabs.map((topic) => (
                <div
                  key={topic}
                  className='bg-background rounded-lg p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow'
                >
                  <ListIcon />
                  <span className='text-sm font-medium text-foreground'>
                    {topic}
                  </span>
                </div>
              ))}
            </div>

            <LinkButton className='flex justify-center items-center gap-2 py-3 px-6'>
              Learn More
              <ArrowRightUp />
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
