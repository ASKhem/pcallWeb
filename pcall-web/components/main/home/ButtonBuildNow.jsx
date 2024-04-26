import React, { useState } from 'react';
import './Button.css';

/* Creditos a https://codepen.io/numerical */
const Button = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  }

  const handleMouseLeave = () => {
    setHover(false);
  }

  const bodyClass = hover ? 'hover' : '';
  return (
    <div className={`button ${bodyClass}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a href="#">
        Build Now
        <span className="shift">›</span>
      </a>
      <div className="mask"></div>
    </div>
  );
}

export default Button;