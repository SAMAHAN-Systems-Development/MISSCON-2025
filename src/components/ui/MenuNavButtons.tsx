import React from 'react';

interface ButtonProps {
  text: string;
  href: string;
}

export default function MenuNavButtons({ text, href }: ButtonProps) {
  return (
    <div
      className="
        flex items-center font-inandan text-white relative w-full sm:w-9/12
        text-base h-10 pl-8
        sm:text-xl sm:h-11 sm:pl-10
        md:text-2xl md:h-12 md:pl-14
        lg:text-3xl lg:h-14 lg:pl-16
        xl:text-4xl xl:h-16 xl:pl-20
        bg-gradient-to-r from-light-violet from-60% sm:from-30%
        hover:bg-gradient-to-r hover:from-white hover:text-light-violet hover:from-60% hover:sm:from-30%
        "
    >
      <a className="w-full block" href={href}>
        {text}
      </a>
    </div>
  );
}
