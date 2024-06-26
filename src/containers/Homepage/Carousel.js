import React, { useState } from 'react';
import img from "./Carousel/image2/1.jpg"
import img1 from "./Carousel/image2/2.jpg"
import img2 from "./Carousel/image2/3.jpg"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
{/* <img src={Img} /> */}
const items = [
  {
    src: img,
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: img1,
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: img2,
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
];

function Exam(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} 
          style={{ maxHeight: '600px', width: 'auto' }} 
          className="d-block w-100 res"
        />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Exam;
        