import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { class: 'slider-item01', background: '/assets/img/fv.jpg' },
    { class: 'slider-item02', background: '/assets/img/fv-2.jpg' },
    { class: 'slider-item03', background: '/assets/img/fv-3.jpg' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="fv">
      <ul className="slider">
        {slides.map((slide, index) => (
          <li 
            key={index}
            className={`slider-item ${slide.class} ${index === currentSlide ? 'active' : ''}`}
            style={{
              display: index === currentSlide ? 'block' : 'none',
              backgroundImage: `url(${slide.background})`
            }}
          ></li>
        ))}
      </ul>
      <div className="fv__body">
        <p className="fv__main">安心して暮らせる環境づくりを<br />支援します</p>
      </div>
      <div className="fv__sub">
        <h1 className="fv__company">株式会社 GOTO PLUS</h1>
      </div>
    </section>
  );
};

export default Hero;