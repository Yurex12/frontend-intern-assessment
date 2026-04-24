import { capacityDevelopments } from '@/constants';
import Image from 'next/image';
import capacityDevelopment from '../images/capacityDevelopment.jpg';
import { ListComponent } from './ListComponent';

export function CapacityDevelopment() {
  return (
    <section className='px-4 md:px-8 lg:px-16'>
      <div className='max-w-8xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-6 md:gap-16'>
        {/* Heading- mobile */}
        <h2 className='text-[20px] sm:text-3xl md:text-4xl lg:hidden font-semibold'>
          Capacity Development
        </h2>

        <div className='lg:order-2 flex items-center justify-center lg:justify-end'>
          <div className='relative h-82 w-full lg:w-151 lg:h-87'>
            <Image
              src={capacityDevelopment}
              alt='Capacity Development'
              fill
              className='rounded-xl object-cover'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
          </div>
        </div>

        <div className='rounded-sm space-y-5 lg:order-1'>
          <h2 className='text-[40px] hidden lg:block font-semibold'>
            Capacity Development
          </h2>
          <p>
            At Tobams Group, we empower individuals and organizations through
            tailored training programs, expert-led workshops, and personalized
            mentorship. We are committed to your success and growth. We are
            dedicated to providing a comprehensive suite of benefits designed to
            foster your development and success:
          </p>

          <div>
            <ListComponent items={capacityDevelopments} />
          </div>
        </div>
      </div>
    </section>
  );
}
