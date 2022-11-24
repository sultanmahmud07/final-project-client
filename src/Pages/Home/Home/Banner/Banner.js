import React from 'react';
import SliderOne from '../../../../Assat/Slider/slider-1.jpg'
import SliderTow from '../../../../Assat/slider-img/slaider-2.jpg';
import SliderThree from '../../../../Assat/slider-img/slider-4.jpg';
import SliderFour from '../../../../Assat/slider-img/slaider-5.jpg';


const Banner = () => {
  return (
    <div className=''>
      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={SliderOne} className="w-full rounded-3xl my-3" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={SliderTow} className="w-full rounded-3xl" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={SliderThree} className="w-full rounded-3xl" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={SliderFour} className="w-full rounded-3xl" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;