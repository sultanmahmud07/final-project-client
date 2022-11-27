import React from 'react';
import SliderOne from '../../../../Assat/phone-img/iphone-slider.jpg'
import SliderTow from '../../../../Assat/phone-img/oppo-slider.jpg'
import SliderThree from '../../../../Assat/phone-img/samsung-slider2.jpg'
import SliderFour from '../../../../Assat/phone-img/redmi-slider.jpg'
import '../../../../commonStyles/style.css'


const Banner = () => {
  return (
    <div className='pb-14 pt-2'>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src={SliderOne} alt='' className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={SliderTow} alt='' className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={SliderThree} alt='' className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={SliderFour} alt='' className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-4">
        <a href="#item1" className="btn btn-primary btn-xs">1</a>
        <a href="#item2" className="btn btn-primary btn-xs">2</a>
        <a href="#item3" className="btn btn-primary btn-xs">3</a>
        <a href="#item4" className="btn btn-primary btn-xs">4</a>
      </div>
    </div>
  );
};

export default Banner;