import React from 'react';

const HamburgerButton = (props) => {

  const lineClass = `hamburger__line ${props.isOpen ? "hamburger__line_opened" : ""}`;

  return (
    <button className="hamburger" onClick={props.handleClick}>
      <div className={lineClass}></div>
      <div className={lineClass}></div>
      <div className={lineClass}></div>
    </button>
  );
};

export default HamburgerButton;