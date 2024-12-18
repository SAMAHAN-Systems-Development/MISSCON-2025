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

  return (
    <div
      className="relative w-20 h-20 overflow-hidden hover:cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <Image
        draggable={false}
        fill
        src={menuButton}
        className={`absolute inset-0 w-min h-min rounded-card object-cover object-center transition-opacity duration-300 ${
          active || isHovered ? 'opacity-0' : 'opacity-100'
        }`}
        alt="Menu Button"
      />

      <Image
        draggable={false}
        fill
        src={menuButtonHovered}
        className={`absolute inset-0 w-min h-min rounded-card object-cover object-center transition-opacity duration-300 ${
          active || !isHovered ? 'opacity-0' : 'opacity-100'
        }`}
        alt="Menu Button Hovered"
      />

      <Image
        draggable={false}
        fill
        src={menuButtonActive}
        className={`absolute inset-0 w-min h-min rounded-card object-cover object-center scale-[0.72] mt-[-2.5px] ${
          active ? 'opacity-100' : 'opacity-0'
        }`}
        alt="Menu Button Active"
      />
    </div>
  );
}
