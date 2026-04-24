'use client';

import Link from 'next/link';

const sections = [
  {
    title: 'Expert-Led Learning',
    description:
      'Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.',
  },
  {
    title: 'Interactive Workshops',
    description:
      'Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.',
  },
  {
    title: 'Comprehensive Curriculum',
    description:
      'Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.',
  },
  {
    title: 'Global Recognition',
    description:
      'You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.',
  },
];

export function TrainingTheConsultant() {
  return (
    <section className='px-4 py-10 md:py-20 bg-primary-muted'>
      <div className='max-w-360 w-full mx-auto space-y-8'>
        {/* Heading */}
        <h2 className='text-3xl md:text-4xl font-bold text-primary'>
          Training The Consultant
        </h2>

        {/* Subheading */}
        <p className='text-lg font-semibold text-primary'>
          Maximise Your Potential as a Certified Trainer:
        </p>

        {/* Description */}
        <p className='text-foreground/85 leading-relaxed max-w-4xl'>
          With the help of our Training Consultants program, take a
          revolutionary step toward becoming a distinguished certified training
          consultant. Learn from professionals in the field, immerse yourself in
          a thorough curriculum, and hone your training methods through
          interactive workshops. Participating in our program will enable you to
          gain expertise in diverse courses while also developing the abilities
          to mentor and encourage others in their career advancement.
        </p>

        {/* Purple Content Box */}
        <div className='bg-primary text-background rounded-2xl p-6 md:p-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
            {sections.map((section, index) => (
              <div key={index} className='space-y-3'>
                <h3 className='text-lg md:text-xl font-bold'>
                  {section.title}
                </h3>
                <p>{section.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href='#'
          className='inline-flex items-center gap-2 bg-[#480F39] text-white py-3 px-6 rounded-md font-medium transition-all duration-200 hover:opacity-90'
        >
          Learn More
          <span>→</span>
        </Link>
      </div>
    </section>
  );
}
