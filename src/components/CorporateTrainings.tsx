import Image from 'next/image';

import corporateTrainings from '../images/corporateTrainings.jpg';

const trainings = [
  'Leadership Training',
  'Strategic Planning and Implementation',
  'Project Management',
  'Sustainability Training',
  'Customised Training',
];

export function CorporateTrainings() {
  return (
    <section className='px-4'>
      <div className='max-w-360 w-full mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-y-6'>
        {/* Heading- mobile */}
        <h2 className='text-[20px] md:hidden sm:text-center font-semibold'>
          Corporate Trainings
        </h2>

        {/* image */}
        <div className='flex items-center justify-center lg:order-2'>
          <div className='relative h-82 w-82 md:w-151 md:h-87'>
            <Image
              src={corporateTrainings}
              alt='Corporate Trainings'
              fill
              className='rounded-xl object-cover'
            />
          </div>
        </div>

        {/* Content */}

        <div className='p-4 rounded-sm space-y-5 lg:order-1'>
          <h2 className='text-[20px] hidden lg:block font-semibold'>
            Corporate Trainings
          </h2>
          <p>
            Empower your team with our customised Corporate Training programs
            designed to address the unique needs and objectives of your
            organisation. Our expert facilitators work closely with your team to
            deliver tailored learning experiences that align with your
            company&apos;s goals and values.
          </p>

          <div>
            <ul className='flex flex-col gap-2 list-disc list-inside px-2'>
              {trainings.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
