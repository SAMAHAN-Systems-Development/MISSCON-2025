"use client";

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IoMdDownload } from 'react-icons/io';

interface DownloadPrimerButtonProps {
  onClick?: () => void;
}

const DownloadPrimerButton: React.FC<DownloadPrimerButtonProps> = ({ onClick }) => {
  const [isVariant2, setIsVariant2] = useState(false);

  const handleClick = () => {
    setIsVariant2(true);
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
        ${isVariant2 ? 'underline' : ''}
      `}
    >
      <span>Download Primer</span>
      <IoMdDownload className="w-6 h-6" />
    </button>
  );
};

DownloadPrimerButton.propTypes = {
  onClick: PropTypes.func,
};

export default DownloadPrimerButton;
