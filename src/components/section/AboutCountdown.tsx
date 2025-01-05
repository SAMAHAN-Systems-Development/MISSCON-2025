'use client';
import Image from 'next/image';
// import Link from 'next/link';
import React from 'react';
import CountdownTimer from '@/components/Countdown';
// import WBup from '../../../public/images/WB-art-2-up.png';
import BackgroundImage from '../../../public/images/AboutCountdownBg.png';
import MissconLogo from '../../../public/images/WB-misscon-text.png';
import MainButton from '@/components/ui/MainButton';
import DownloadPrimerButton from '../ui/DownloadPrimerButton';

export default function AboutCountdown() {
  return (
    <div className="relative w-full h-full pt-20 pb-72">
      {/* Background Image Section */}
      <div className="absolute inset-0 z-0">
        <Image src={BackgroundImage} alt={'background'} fill />
      </div>

      {/* Foreground Image Section
      <div className="absolute inset-x-0 inset-y-0 z-20">
        <Image src={WBup} alt={'foreground'} height={100} width={1500} />
      </div> */}

      {/* Foreground */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Image
          src="/images/WB-art-2-up.png"
          alt="Foreground Art"
          width={3000}
          height={300}
          className="object-cover"
        />
      </div>

      {/* Text and Content Section */}
      <div
        className="relative z-30 text-center px-4 md:px-12 lg:px-20 flex flex-col items-center justify-center h-full text-white"
        id="about"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-pirata_one -mb-1">
          About
        </h1>
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-[130px] xl:h-[130px]">
          <Image
            src={MissconLogo}
            alt="foreground"
            fill
            className="object-contain"
          />
        </div>

        <div className="flex flex-col items-center mt-28 md:mt-44 w-5/6 lg:w-4/6 font-gill_sans">
          <p className="mb-8 text-base md:text-lg lg:text-2xl text-center font-gill_sans">
            The study of the international in Mindanao thrives and continues to
            integrate nascent transboundary trends into our understanding of the
            world. Imitating the complexity of indigenous textile patterns,
            doing International Studies in Mindanao is the active interweaving
            of a worldview that emanates from the island’s rich heritage,
            contemporary positionalities, and hopeful transitions. Emerging from
            the five-year pandemic-induced hiatus, the Mindanao International
            Studies Society (MISS) reconvenes to reconnect the IS community of
            Mindanao by weaving together our histories, current dynamisms, and
            visions for the future. The 2025 MISS Convention (MISSCON) will
            allow us to trace our common past, accompany each other in the
            present journey, and together dream of a shared tomorrow.
          </p>
          <DownloadPrimerButton />
        </div>

        {/* Countdown and Registration Section */}
        <div className="mt-48 md:mt-64" id="register">
          <h2 className="text-3xl md:text-5xl lg:text-7xl mb-3 font-pirata_one">
            Feeling excited?
          </h2>
          <div>
            <CountdownTimer />
          </div>
          <div className="flex justify-center mt-8">
            <MainButton href="http://tiny.cc/f8qtzz" text="register here" />
          </div>
        </div>
      </div>
    </div>
  );
}
