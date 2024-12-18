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

  return (
    <div
      className="relative w-20 h-20 overflow-hidden group hover:cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Default Image */}
      <Image
        draggable={false}
        fill
        src={menuButton}
        className={`w-min h-min rounded-card object-cover object-center absolute inset-0 transition-opacity duration-300 ${
          active || isHovered ? 'opacity-0' : 'opacity-100'
        }`}
        alt="Menu Button"
      />

      {/* Hovered/Active Image */}
      <Image
        draggable={false}
        fill
        src={menuButtonHovered}
        className={`w-min h-min rounded-card object-cover object-center absolute inset-0 transition-opacity duration-300 ${
          active || isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        alt="Menu Button Hovered"
      />
    </div>
  );
}
