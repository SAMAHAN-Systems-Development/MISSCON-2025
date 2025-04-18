import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

interface MainButtonProps {
  href: string;
  text?: string;
  className?: string;
}

const MainButton: React.FC<MainButtonProps> = ({ href, text }) => {
  return (
    <Link
      href={href}
      className="bg-gradient-to-r from-violet to-purple
      hover:from-dark-violet hover:to-dark-violet text-white font-pirata_one text-3xl 
      sm:text-4xl lg:text-5xl px-8 sm:px-12 lg:px-16 py-3 sm:py-4 lg:py-5 rounded-xl 
      sm:rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 ease-in-out"
    >
      {text || 'register here'}
    </Link>
  );
};

MainButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default MainButton;
