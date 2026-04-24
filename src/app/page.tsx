import { CapacityDevelopment } from '@/components/CapacityDevelopment';
import { CorporateTrainings } from '@/components/CorporateTrainings';
import { Hero } from '@/components/Hero';
import { LMS } from '@/components/LMS';
import { ManagementDevelopmentProgram } from '@/components/ManagementDevelopmentProgram';
import { PersonalIndividualTraining } from '@/components/PersonalIndividualTraining';
import { LearningWithOurCeo } from '@/components/LearningWithOurCeo';
import { BookConsultant } from '@/components/BookConsultant';
import { TrainingTheConsultant } from '@/components/TrainingTheConsultant';
import { Footer } from '@/components/Footer';
import { GetInTouch } from '@/components/GetInTouch';

export default function Home() {
  return (
    <main className='space-y-10'>
      <Hero />
      <LMS />
      <CorporateTrainings />
      <PersonalIndividualTraining />
      <CapacityDevelopment />
      <ManagementDevelopmentProgram />
      <LearningWithOurCeo />
      <TrainingTheConsultant />
      <BookConsultant />
      <div>
        <GetInTouch />
        <Footer />
      </div>
    </main>
  );
}
