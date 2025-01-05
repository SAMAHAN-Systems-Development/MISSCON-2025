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
        relative flex items-center gap-1 
        text-white font-light font-abel tracking-wider uppercase
        text-xl sm:text-2xl lg:text-3xl
        transition-all duration-300 ease-in-out
        hover:underline w-min
      `}
    >
      <span className="w-48 sm:w-56 lg:w-64">Download Primer</span>
      <IoMdDownload className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
    </button>
  );
};

export default DownloadPrimerButton;