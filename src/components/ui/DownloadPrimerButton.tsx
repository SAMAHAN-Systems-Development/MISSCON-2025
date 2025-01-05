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
        text-white font-light font-abel tracking-wider uppercase text-3xl
        transition-all duration-300 ease-in-out
        hover:underline w-min
      `}
    >
      <span className="w-64">Download Primer</span>
      <IoMdDownload className="w-7 h-7" />
    </button>
  );
};

export default DownloadPrimerButton;
