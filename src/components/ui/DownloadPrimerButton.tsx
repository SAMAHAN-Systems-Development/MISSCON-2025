'use client';

import React from 'react';
import { IoMdDownload } from 'react-icons/io';

interface DownloadPrimerButtonProps {
  onClick?: () => void;
}

const DownloadPrimerButton: React.FC<DownloadPrimerButtonProps> = ({
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        relative flex items-center gap-2 
        text-white font-light font-abel tracking-wider uppercase text-2xl
        transition-all duration-300 ease-in-out
        hover:underline
      `}
    >
      <span>Download Primer</span>
      <IoMdDownload className="w-6 h-6" />
    </button>
  );
};

export default DownloadPrimerButton;
