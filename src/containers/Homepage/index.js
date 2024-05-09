/**
 *
 * Homepage
 *
 */

import React from 'react';
import Slider from './autoslider/auto';
import Exam from './Carousel';
import Section1 from './Section/Section1';
import ChooseUs from './ChooseUs/ChooseUs';
import Testimonial from './Testimonial/Testimonial';
import ProductCard from './Product/ProductCard';
import slid from './autoslider/auto';
// import ProductComponent from './prodbtn/prodbtn';
import ProductComponent from './ProductComponent/ProductComponent';


function Homepage() {
  return (
    <div className="App">
      <Exam></Exam>
      <Section1></Section1>
      <ProductCard></ProductCard>
      <Slider></Slider>
      <ChooseUs></ChooseUs>
      <Testimonial></Testimonial>
    </div>
  );
}

const mapStateToProps = state => {
  return {};
};

export default (Homepage);
