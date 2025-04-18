import React, { useState } from 'react';
import Image from 'next/image';

interface MenuButtonProps {
  active: boolean;
  onClick: () => void;
}

export default function MenuButton({ active, onClick }: MenuButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const menuButton = '/images/MenuButton.png';
  const menuButtonHovered = '/images/MenuButton-Hovered.png';
  const menuButtonActive = '/images/MenuButton-Active.png';
  const menuButtonMobile = '/images/X with BG.png';

  return (
    <div
      className="relative w-20 h-20 overflow-hidden hover:cursor-pointer"
      onMouseEnter={() => {
        const isBelowLg = window.innerWidth > 1199;
        if (isBelowLg) setIsHovered(true);
      }}
      onMouseLeave={() => {
        const isBelowLg = window.innerWidth > 1199;
        if (isBelowLg) setIsHovered(false);
      }}
      onClick={onClick}
    >
      <Image
        draggable={false}
        fill
        src={menuButtonMobile}
        className={`absolute inset-0 w-min h-min rounded-card object-cover object-center xl:transition-opacity xl:duration-300 ${
          active ? 'xl:hidden block' : 'hidden'
        }`}
        alt="Menu Button Mobile"
      />

      {/* Default state */}
      <Image
        draggable={false}
        fill
        src={menuButton}
        className={`absolute inset-0 w-min h-min rounded-card object-cover object-center xl:transition-opacity xl:duration-300 ${
          active || isHovered ? 'opacity-0' : 'opacity-100'
        }`}
        alt="Menu Button"
      />

      {/* Hover state */}
      <Image
        draggable={false}
        fill
        src={menuButtonHovered}
        className={`absolute inset-0 w-min h-min rounded-card object-cover object-center xl:transition-opacity xl:duration-300 hidden xl:block ${
          active && isHovered
            ? 'xl:opacity-100 opacity-0'
            : active || !isHovered
              ? 'opacity-0'
              : 'opacity-100'
        }`}
        alt="Menu Button Hovered"
      />

      {/* Active state */}
      <Image
        draggable={false}
        fill
        src={menuButtonActive}
        className={`absolute inset-0 w-min h-min rounded-card object-cover object-center scale-[0.72] mt-[-2.5px] xl:transition-opacity xl:duration-300 hidden xl:block ${
          active && !isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        alt="Menu Button Active"
      />
    </div>
  );
}
