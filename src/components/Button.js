import React from 'react';

const Button = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={`bg-blue-500 text-white px-4 py-2 mt-4 rounded-md ${className}`}>
      {children}
    </button>
  );
};

export default Button;
