import Image from 'next/image';
import { ListComponent } from './ListComponent';
import managementDevelopmentProgram from '../images/managementDevelopmentProgram.png';
import { ListIcon } from './icons/ListIcon';

const developments = [
  'Enhanced Leadership Skills',
  'Improved Employee Engagement',
  'Stronger Organisational Culture',
  'Sustainable Growth',
];

export function ManagementDevelopmentProgram() {
  return (
    <section className='px-4 py-10 bg-primary-muted text-background'>
      <div className='max-w-360 w-full mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-y-6 py-4 px-20 rounded-md bg-primary'>
        {/* Heading- mobile */}
        <h2 className='text-[20px] md:hidden sm:text-center font-semibold'>
          Management Development Program
        </h2>

        {/* image */}
        <div className='flex items-center justify-center md:justify-start'>
          <div className='relative h-82 w-82 md:w-148 md:h-160'>
            <Image
              src={managementDevelopmentProgram}
              alt='Management Development Program'
              fill
              className='rounded-xl object-cover'
            />
          </div>
        </div>

        {/* Content */}
        <div className='p-8 rounded-sm space-y-8'>
          <h2 className='text-[40px] hidden lg:block font-semibold'>
            Management Development Program
          </h2>

          <p>
            Tobams Group offers a comprehensive Management Development Program
            designed to equip corporate organisations with the high -performing
            leaders they need to thrive.
          </p>

          <p>
            Our program includes workshops, seminars, coaching sessions, online
            courses, and experiential learning opportunities designed to improve
            leadership, strategic thinking, communication, and other essential
            managerial competencies for corporate organisations.
          </p>

          <div>
            <ul className='flex flex-col gap-y-6 px-2'>
              {developments.map((development) => (
                <li
                  key={development}
                  className='flex items-start gap-2 bg-[#8F6182] py-2 px-4 rounded-md'
                >
                  <span className='mt-1 shrink-0'>
                    <ListIcon className='text-background' />
                  </span>
                  <span>{development}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
