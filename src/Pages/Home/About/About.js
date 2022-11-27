import React from 'react';

import { Link } from 'react-router-dom';
import img from '../../../Assat/phone-img/provider.jpg';
import '../../../commonStyles/style.css'
import PraimaryButton from '../../../components/PraimaryButtton/PraimaryButton';

const About = () => {
  return (
    <div className='my-20'>
      <div className="common-w">
        <h2 className='text-primary font-semibold text-2xl py-3'>Shop Provider:</h2>
       
        <div className="flex flex-col lg:flex-row justify-between">
          <div className='w-full lg:w-1/2'>
          <img src={img} alt='' className=" w-full shadow-2xl" />
          </div>
          <div className='w-full bg-slate-200 p-3 lg:p-5 lg:w-1/2'>
            <h1 className="text-4xl text-blue-900 font-bold">About me !!</h1>
            <p className="py-6">Hello sir, my name is Sultan Mahmud. I am a professional photographer. I am working in the same department for last 6 years. I have done a lot of freelance work at home and abroad. Click the button below if you want to take my service. Thank you!</p>
            <div className='lg:pt-4'>
              <Link to='/products'><PraimaryButton>Our Services</PraimaryButton></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;