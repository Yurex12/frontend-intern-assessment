import Image from 'next/image';
import managementDevelopmentProgram from '../images/managementDevelopmentProgram.png';
import { ListIcon } from './icons/ListIcon';
import { managementDevelopmentsPrograms } from '@/constants';

export function ManagementDevelopmentProgram() {
  return (
    <section className='px-4 py-10 bg-primary-muted text-background md:px-8 lg:px-16'>
      <div className='max-w-8xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-6 lg:gap-12 p-5 lg:p-10 rounded-2xl bg-[#2C0922]'>
        {/* Heading- mobile */}
        <h2 className='text-[20px] font-semibold sm:text-3xl md:text-4xl lg:hidden sm:text-center'>
          Management Development Program
        </h2>

        <div className='flex items-center justify-center md:justify-start'>
          <div className='relative h-82 w-full lg:w-148 lg:h-160'>
            <Image
              src={managementDevelopmentProgram}
              alt='Management Development Program'
              fill
              className='rounded-xl object-cover'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
          </div>
        </div>

        <div className='lg:p-8 rounded-sm space-y-8'>
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
              {managementDevelopmentsPrograms.map((development) => (
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
