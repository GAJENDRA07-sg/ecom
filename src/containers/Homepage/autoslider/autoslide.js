import React, { useRef, useEffect } from 'react';
import './LogoSlider.css';

const LogoSlider = ({ logos }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const logosWrapper = container.querySelector('.logos-wrapper');
    const logos = logosWrapper.querySelectorAll('img');
    const logoWidth = logos[0].offsetWidth; 
    const totalWidth = logos.length * logoWidth;
    

    const clonedLogos = logosWrapper.cloneNode(true);
    logosWrapper.appendChild(clonedLogos);

    const animation = logosWrapper.animate(
      [{ transform: 'translateX(0)' }, { transform: `translateX(-${totalWidth}px)` }],
      {
        duration: 20000, 
        iterations: Infinity,
        easing: 'linear'
      }
    );

    return () => {
      animation.cancel();
    };
  }, [logos]);

  return (
    <div className="logo-container" ref={containerRef}>
      <div className="logos-wrapper">
        {logos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
