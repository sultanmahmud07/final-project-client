import React from 'react';

const ItemCard = ({item}) => {
  const {_id, Brand, Img, address, buy, condition, new_price, resell_price, post_time, use_time, phone_model, selling_address  } =item
  console.log(item);
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure><img className='w-full' src={Img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {phone_model}
            <div className="badge badge-secondary">{condition}</div>
          </h2>
          <div className='flex justify-between'>
            <span> <span className='text-warning font-bold '> Brand:</span> {Brand}</span>
            <span>Used: {use_time}Mt</span>
          </div>
          <p>Address: {address}</p>
          <p>Location Address: {selling_address}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">New Price: {new_price}</div>
            <div className="badge badge-outline">Resells: {resell_price}</div>
          </div>
        </div>
        <div>
          <button className='btn btn-primary w-full'>Add Booking</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;