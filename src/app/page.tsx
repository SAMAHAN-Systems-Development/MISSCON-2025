import AboutCountdown from '@/components/section/AboutCountdown';
import HeroSection from '@/components/section/HeroSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MISSCON 2025',
  description:
    'The official Mindanao International Studies Society Convention (MISSCON) 2025 Website.',
};

export default function Home() {
  return (
    <main>
      <HeroSection></HeroSection>
      <AboutCountdown></AboutCountdown>
    </main>
  );
}
