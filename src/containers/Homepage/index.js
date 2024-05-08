/**
 *
 * Homepage
 *
 */

import React from 'react';
import Exam from './Carousel';
import Section1 from './Section/Section1';
import BlogPost from './Blog/BlogPost';
import ChooseUs from './ChooseUs/ChooseUs';
import OurClient from './OurClient/OurClient';
import Testimonial from './Testimonial/Testimonial';
import ProductCard from './Product/ProductCard';


function Homepage() {
  return (
    <div className="App">
      <Exam></Exam>
      <Section1></Section1>
      <ProductCard></ProductCard>
      <OurClient></OurClient>
      <BlogPost></BlogPost>
      <ChooseUs></ChooseUs>
      
      <Testimonial></Testimonial>
    </div>
  );
}

const mapStateToProps = state => {
  return {};
};

export default (Homepage);
