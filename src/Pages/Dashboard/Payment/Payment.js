import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRAIPE_PK);

// console.log(stripePromise);
const Payment = () => {
  const booking = useLoaderData();
  const navigation =useNavigation();
  const { modelName, price, userName, img, email } = booking;
  console.log('booking data', booking);

  
  if(navigation.state === "loading"){
    return <Loading></Loading>
  }


  return (
    <div className='w-full text-center md:w-1/2 border rounded-md p-10 mx-auto shadow-lg md:mt-8'>
      <div className="avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={img} alt='' />
        </div>
      </div>
      <h1 className='text-3xl text-green-600 mb-4 font-bold'>Payment of {modelName}</h1>
      <h2 className='text-xl'>Please pay <strong>${price}</strong> for your {modelName} phone</h2>
      <div className='lg:w-11/12 mx-autho border mx-auto my-12'>
        <div className='card-body'>
          <Elements stripe={stripePromise}>
          <CheckoutForm
          booking={booking}
           />
        </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;