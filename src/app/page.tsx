import { CorporateTrainings } from '@/components/CorporateTrainings';
import { Hero } from '@/components/Hero';
import { LMS } from '@/components/LMS';

export default function Home() {
  return (
    <main className='space-y-10'>
      <Hero />
      <LMS />
      <CorporateTrainings />
    </main>
  );
}
