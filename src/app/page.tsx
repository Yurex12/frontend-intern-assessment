import { CapacityDevelopment } from '@/components/CapacityDevelopment';
import { CorporateTrainings } from '@/components/CorporateTrainings';
import { Hero } from '@/components/Hero';
import { LearningManagementSystem } from '@/components/LearningManagementSystem';
import { ManagementDevelopmentProgram } from '@/components/ManagementDevelopmentProgram';
import { PersonalIndividualTraining } from '@/components/PersonalIndividualTraining';
import { LearningWithOurCeo } from '@/components/LearningWithOurCeo';
import { BookConsultant } from '@/components/BookConsultant';
import { TrainingTheConsultant } from '@/components/TrainingTheConsultant';
import { Footer } from '@/components/Footer';
import { GetInTouch } from '@/components/GetInTouch';
import { Testimonials } from '@/components/Testimonials';

export default function Home() {
  return (
    <main className='space-y-10'>
      <Hero />
      <LearningManagementSystem />
      <CorporateTrainings />
      <PersonalIndividualTraining />
      <CapacityDevelopment />
      <ManagementDevelopmentProgram />
      <LearningWithOurCeo />
      <TrainingTheConsultant />
      <BookConsultant />
      <Testimonials />
      <div>
        <GetInTouch />
        <Footer />
      </div>
    </main>
  );
}
