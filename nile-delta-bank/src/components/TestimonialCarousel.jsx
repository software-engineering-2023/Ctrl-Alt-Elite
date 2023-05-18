import React, { useState } from 'react';
import '../css/testimonial-carousel.css'; // Create a CSS file for styling

const testimonials = [
  {
    id: 1,
    name: 'YOUSSEF HANY',
    image: 'res/youssef-hany.svg',
    text: 'Love this! I never have to worry about missing a bill payment or overdrawing my account. Their notifications keep me on track.',
  },
  {
    id: 2,
    name: 'FIRSTNAME LASTNAME',
    image: 'res/youssef-hany.svg',
    text: 'TEMP',
  },
  {
    id: 3,
    name: 'FIRST NAME LAST NAME',
    image: 'res/youssef-hany.svg',
    text: 'TEMP2',
  }
];

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1));
  };

  return (
    <div className="testimonial-carousel">
      <div className="testimonial-card">
        <div className="testimonial-image-name">
          <img className="testimonial-card-pic" src={testimonials[currentSlide].image} alt={testimonials[currentSlide].name} />
          <h3>{testimonials[currentSlide].name}</h3>
        </div>
        <div className="testimonial-text-rating">
          <img className="rating" src="res/rating4.svg" alt="" />
          <p id="tagline" class="fulljustify">{testimonials[currentSlide].text}</p>
        </div>
      </div>
      <div className="arrows">
        <img
          src="res/left.svg"
          alt="Previous"
          className="arrow arrow-left"
          onClick={prevSlide}
        />
        <img
          src="res/right.svg"
          alt="Next"
          className="arrow arrow-right"
          onClick={nextSlide}
        />
      </div>
      <div className="dots">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;