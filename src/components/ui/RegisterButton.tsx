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
      className="bg-light-violet text-white font-pirata_one text-lg px-4 py-2 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg hover:bg-dark-violet"
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
