'use client';

import { testimonials } from '@/constants';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/pagination';
import { ChevronIcon } from './icons/ChevronIcon';

export function Testimonials() {
  return (
    <section className='bg-primary-muted py-8 px-4 md:px-8 lg:px-16'>
      <div className='max-w-8xl w-full mx-auto space-y-4'>
        <h1 className='text-[20px] sm:text-3xl md:text-4xl font-semibold text-center'>
          Testimonials
        </h1>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          loop={true}
          navigation={{
            prevEl: '.testimonial-prev',
            nextEl: '.testimonial-next',
          }}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 2.4 },
            1024: { slidesPerView: 3.5 },
          }}
          className='pb-12'
        >
          {testimonials.map(({ image, name, role, testimonial }, i) => (
            <SwiperSlide key={i}>
              <div className='bg-background max-h-full border-l-2 border-secondary rounded-2xl p-6 shadow-sm flex-1'>
                <div className='flex items-center gap-4 mb-4'>
                  <div className='relative w-14 h-14 rounded-full overflow-hidden shrink-0'>
                    <Image
                      src={image}
                      alt={name}
                      fill
                      className='object-cover'
                    />
                  </div>
                  <div>
                    <h3 className='font-semibold'>{name}</h3>
                    <p className='text-[#696969] text-sm'>{role}</p>
                  </div>
                </div>

                <p>{testimonial}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className='flex justify-end'>
          <div className='flex items-center justify-between gap-4'>
            <button
              className='testimonial-prev flex h-8 w-10 items-center justify-center rounded-md bg-secondary/20 text-foreground'
              aria-label='Previous testimonial'
            >
              <ChevronIcon className='rotate-90 text-secondary' />
            </button>

            <button
              className='testimonial-prev flex h-8 w-10 items-center justify-center rounded-md bg-secondary/20 text-foreground'
              aria-label='Next testimonial'
            >
              <ChevronIcon className='-rotate-90 text-secondary' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
