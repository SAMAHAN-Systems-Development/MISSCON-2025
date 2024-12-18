import CountdownTimer from '@/components/Countdown';
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
      The official Mindanao International Studies Society Convention (MISSCON)
      2025 Website.
      <div><CountdownTimer/></div>
    </main>
  );
}
