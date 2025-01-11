import AboutCountdown from '@/components/section/AboutCountdown';
import HeroSection from '@/components/section/HeroSection';
import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'MISSCON 2025',
  description:
    'The official Mindanao International Studies Society Convention (MISSCON) 2025 Website.',
};

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico?v=M44lzPylqQ" />
        {/* <link rel="icon" href="src/app/icon.ico?v=1" /> */}
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/images/safari-pinned-tab.svg?v=M44lzPylqQ"
          color="#000000"
        ></link>
        {/* <link rel="apple-touch-icon" href="apple-touch-icon.png" /> */}
        {/* <link
          rel="mask-icon"
          type="image/png"
          sizes="180x180"
          href="apple-touch-icon.png"
          color="#000000"
        /> */}
      </Head>
      <main>
        <HeroSection></HeroSection>
        <AboutCountdown></AboutCountdown>
      </main>
    </>
  );
}
