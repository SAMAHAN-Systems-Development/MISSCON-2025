import CountdownTimer from '@/components/Countdown';
import Footer from '@/components/Footer';
import SlideMenu from '@/components/SlideMenu';
import AccordionComponent from '@/components/ui/AccordionFAQ';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MISSCON 2025',
  description:
    'The official Mindanao International Studies Society Convention (MISSCON) 2025 Website.',
};

export default function Home() {
  return (
    <main>
      {/* add sections here */}
      <div>
        <CountdownTimer />
      </div>
    </main>
  );
}
