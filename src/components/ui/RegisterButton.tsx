import React from 'react';

interface RegisterButtonProps {
  href: string; // Required link for the button
  text: string;
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ href, text = "register here" }) => {
  return (
    <a
      href={href}
      className="inline-block bg-gradient-light-violet text-white font-pirata_one text-lg px-6 py-3 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg hover:bg-purple"
    >
      {text}
    </a>
  );
};

export default RegisterButton;
