import Image from 'next/image';

import capacityDevelopment from '../images/capacityDevelopment.jpg';

const developments = [
  'Tailored Training Programs',
  'Expert-Led Workshops',
  'Personalized Mentorship',
  'Technical Skills Enhancement',
  'Collaborative Learning Environment',
  'Ongoing Support and Resources',
];

export function CapacityDevelopment() {
  return (
    <section className='px-4'>
      <div className='max-w-360 w-full mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-y-6'>
        {/* Heading- mobile */}
        <h2 className='text-[20px] md:hidden sm:text-center font-semibold'>
          Capacity Development
        </h2>

        {/* image */}
        <div className='lg:order-2 flex items-center justify-center md:justify-end'>
          <div className='relative h-82 w-82 md:w-151 md:h-87'>
            <Image
              src={capacityDevelopment}
              alt='Capacity Development'
              fill
              className='rounded-xl object-cover'
            />
          </div>
        </div>

        {/* Content */}

        <div className='p-4 rounded-sm space-y-5 lg:order-1'>
          <h2 className='text-[20px] hidden lg:block font-semibold'>
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
            <ul className='flex flex-col gap-2 list-disc list-inside px-2'>
              {developments.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
