import React from 'react';

interface ButtonProps {
  text: string;
  href: string;
}

export default function MenuNavButtons({ text, href }: ButtonProps) {
  return (
    <a
      href={href}
      className="relative group w-full sm:w-9/12 h-10 sm:h-11 md:h-12 lg:h-14 xl:h-16 block"
    >
      <div
        className="
          absolute inset-0 bg-gradient-to-r from-white to-transparent transition-opacity duration-300 opacity-0
          group-hover:opacity-100
        "
      ></div>
      <div
        className="
          relative h-full flex items-center font-inandan text-white text-base pl-8
          sm:text-xl sm:pl-10 md:text-2xl md:pl-14 lg:text-3xl lg:pl-16
          xl:text-4xl xl:pl-28 group-hover:text-light-violet transition-colors duration-300
        "
      >
        {text}
      </div>
    </a>
  );
}
