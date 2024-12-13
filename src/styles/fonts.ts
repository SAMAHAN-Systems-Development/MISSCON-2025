import { Pirata_One, Adamina, Abel } from 'next/font/google';

import localFont from 'next/font/local';

export const pirata_one = Pirata_One({
  variable: '--font-pirata-one',
  weight: ['400'],
  display: 'swap',
  subsets: ['latin', 'latin-ext'],
});

export const adamina = Adamina({
  variable: '--font-adamina',
  weight: ['400'],
  subsets: ['latin'],
});

export const abel = Abel({
  variable: '--font-abel',
  weight: ['400'],
  subsets: ['latin'],
});

export const gill_sans = localFont({
  src: [
    {
      path: '/fonts/Gill-Sans-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '/fonts/Gill-Sans-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '/fonts/Gill-Sans-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '/fonts/Gill-Sans.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-gill-sans',
  display: 'swap',
});

export const inandan = localFont({
  src: [
    {
      path: '/fonts/Inandan.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-inandan',
  display: 'swap',
});
