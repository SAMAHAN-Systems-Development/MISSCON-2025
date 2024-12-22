import { phetsarath } from '@/styles/fonts';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        abel: ['var(--font-abel)'],
        adamina: ['var(--font-adamina)'],
        pirata_one: ['var(--font-pirata-one)'],
        gill_sans: ['var(--font-gill-sans)'],
        inandan: ['var(--font-inandan)'],
        phetsarath: ['var(--font-phetsarath)'],
      },
      backgroundImage: {
        'gradient-light-violet': 'linear-gradient(120deg, rgb(var(--color-violet) /100%), rgb(var(--color-light-violet) / 80%), rgb(var(--color-light-violet) / 60%))',
      },
    },
    colors: {
      'dark-violet': 'rgb(var(--color-dark-violet) / <alpha-value>)',
      violet: 'rgb(var(--color-violet) / <alpha-value>)',
      'light-violet': 'rgb(var(--color-light-violet) / <alpha-value>)',
      purple: 'rgb(var(--color-purple) / <alpha-value>)',
      green: 'rgb(var(--color-green) / <alpha-value>)',
      red: 'rgb(var(--color-red) / <alpha-value>)',
      orange: 'rgb(var(--color-orange) / <alpha-value>)',
      'yellow-orange': 'rgb(var(--color-yellow-orange) / <alpha-value>)',
      yellow: 'rgb(var(--color-yellow) / <alpha-value>)',
      gray: 'rgb(var(--color-gray) / <alpha-value>)',
      white: 'rgb(var(--color-white) / <alpha-value>)',
    },
    screens: {
      xsm: '0px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
  },
  plugins: [],
} satisfies Config;
export default config;
