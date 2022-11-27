import React from 'react';
import '../../../commonStyles/style.css'
import num1 from '../../../Assat/comming/tv.jpg'
import num2 from '../../../Assat/comming/ac.jpg'
import num3 from '../../../Assat/comming/laptop-1.jpg'
import num4 from '../../../Assat/comming/freez.jpg'

const RecentlyPost = () => {
  return (
    <div className='common-w'>
      <div className='text-center py-16'>
        <h1 className='font-bold inline-block text-center text-4xl border-b-4  py-3'>Comming Soon</h1>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-20'>

        <div className="card card-compact bg-base-100 ">
          <div className="avatar text-center">
            <div className="w-9/12 text-center mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={num1} alt='' />
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">Smart HD TV!</h2>
            <p>A smart TV is a combination of a TV, computer, and a Setup Box. These TVs .. </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full">Details</button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 ">
          <div className="avatar text-center">
            <div className="w-9/12 text-center mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={num2} alt='' />
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">Air Conditionar (AC)</h2>
            <p>Air Conditioner (AC) is an Electronic device that can lower the temperature ..</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full">Details</button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 ">
          <div className="avatar text-center">
            <div className="w-9/12 text-center mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={num3} alt='' />
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">Laptop</h2>
            <p>Buy laptop at Lowest price guaranteed in Bangladesh. All popular Laptop bran.. </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full">Details</button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 ">
          <div className="avatar text-center">
            <div className="w-9/12 text-center mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={num4} alt='' />
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">Rafrigerator!</h2>
            <p>Refrigeration is an essential food storage technique around the world. The low..</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full">Details</button>
            </div>
          </div>
        </div>




      </div>

    </div>
  );
};

export default RecentlyPost;