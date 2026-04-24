import { CapacityDevelopment } from '@/components/CapacityDevelopment';
import { CorporateTrainings } from '@/components/CorporateTrainings';
import { Hero } from '@/components/Hero';
import { LMS } from '@/components/LMS';
import { ManagementDevelopmentProgram } from '@/components/ManagementDevelopmentProgram';
import { PersonalIndividualTraining } from '@/components/PersonalIndividualTraining';
import { LearningWithOurCeo } from '@/components/LearningWithOurCeo';
import { TrainingTheConsultant } from '@/components/TrainingTheConsultant';

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
    </main>
  );
}
