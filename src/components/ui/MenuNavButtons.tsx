import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  text: string;
  href: string;
  onClick: () => void;
}

export default function MenuNavButtons({ text, href, onClick }: ButtonProps) {
  return (
    <Link
      href={href}
      className="relative group w-full h-[70px] block"
      onClick={onClick}
    >
      <div
        className="
          absolute inset-0 bg-white transition-opacity duration-300 opacity-0
          group-hover:opacity-100
        "
        style={{
          background: 'linear-gradient(to right, white 60%, transparent)',
        }}
      ></div>
      <div
        className="
          relative h-full flex items-center font-inandan text-white
          text-4xl pl-16 xl:pl-24 group-hover:text-light-violet transition-colors duration-300
        "
      >
        {text}
      </div>
    </Link>
  );
}
