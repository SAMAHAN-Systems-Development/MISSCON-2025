import React from 'react';
import PropTypes from 'prop-types';

interface RegisterButtonProps {
  href: string;
  text?: string;
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ href, text }) => {
  return (
    <a
      href={href}
      className="bg-violet text-white font-pirata_one text-5xl px-14 py-2 rounded-2xl shadow-md transition-all duration-200 hover:shadow-lg hover:bg-dark-violet"
    >
      {text || 'register here'}
    </a>
  );
};

RegisterButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default RegisterButton;
