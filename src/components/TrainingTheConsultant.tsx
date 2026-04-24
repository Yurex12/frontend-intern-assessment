import { trainingSections } from '@/constants';
import { LinkButton } from './LinkButton';
import { ChevronIcon } from './icons/ChevronIcon';
import { ArrowRightUp } from './icons/ArrowRightUp';

export function TrainingTheConsultant() {
  return (
    <section className='px-4 md:px-8 lg:px-16 py-10 bg-primary-muted'>
      <div className='max-w-8xl w-full mx-auto space-y-5'>
        <h2 className='text-3xl md:text-4xl lg:text-[40px] font-semibold text-primary'>
          Training The Consultant
        </h2>

        <p className='font-semibold text-primary'>
          Maximise Your Potential as a Certified Trainer:
        </p>

        <p>
          With the help of our Training Consultants program, take a
          revolutionary step toward becoming a distinguished certified training
          consultant. Learn from professionals in the field, immerse yourself in
          a thorough curriculum, and hone your training methods through
          interactive workshops. Participating in our program will enable you to
          gain expertise in diverse courses while also developing the abilities
          to mentor and encourage others in their career advancement.
        </p>

        <div className='bg-primary text-background rounded-2xl p-6 md:p-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
            {trainingSections.map((section, index) => (
              <div key={index} className='space-y-3'>
                <h3 className='text-lg font-bold'>{section.title}</h3>
                <p className='text-sm'>{section.description}</p>
              </div>
            ))}
          </div>
        </div>

        <LinkButton className='flex items-center gap-2 py-3 px-6'>
          Learn More
          <ChevronIcon className='lg:hidden -rotate-90' />
          <ArrowRightUp className='hidden lg:block' />
        </LinkButton>
      </div>
    </section>
  );
}
