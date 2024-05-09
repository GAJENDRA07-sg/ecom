import React from 'react';
import LogoSlider from './autoslide.js';
import myImg from '../../../assets/prodimg/our (2).jpg'
import myImg1 from '../../../assets/prodimg/our (3).jpg'
import myImg2 from '../../../assets/prodimg/our (4).jpg'
import myImg3 from '../../../assets/prodimg/our (5).jpg'
import myImg4 from '../../../assets/prodimg/our (6).jpg'
import myImg5 from '../../../assets/prodimg/our (7).jpg'

const logos = [
  { src: myImg, alt: 'Logo 1' },
  { src: myImg1, alt: 'Logo 2' },
  { src: myImg2, alt: 'Logo 3' },
  { src: myImg3, alt: 'Logo 3' },
  { src: myImg4, alt: 'Logo 3' },
  { src: myImg5, alt: 'Logo 3' },


];

const Slider = () => {
  return (
    <div className='mr-20'>
      <h1 className='center'>Our Clients</h1>
      <LogoSlider logos={logos} />
    </div>
  );
};

export default Slider;
