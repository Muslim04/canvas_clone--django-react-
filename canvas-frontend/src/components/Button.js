import React from 'react';
// import './Button.css'; // Optional: for component-specific styles

const Button = ({ onClick, children }) => (
  <button onClick={onClick} className="button">
    {children}
  </button>
);

export default Button;
