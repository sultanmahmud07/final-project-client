import React from 'react';

const AddProductCard = ({product}) => {
  const {name, image, brand,} =product;
  return (
    <div>
    <div className="card w-full bg-base-100 shadow-xl">
      <figure><img className='w-full' src={image} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {/* {phone_model} */}
          <div className="badge badge-secondary">kkk</div>
        </h2>
        <div className='flex justify-between'>
          <span> <span className='text-warning font-bold '> Brand:</span> {brand}</span>
          <span>Used: Mt</span>
        </div>
        <p>Address: </p>
        <p>Location Address: </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">New Price: </div>
          <div className="badge badge-outline">Resells: </div>
        </div>
      </div>
      <div>
        <label 
        htmlFor="my-modal-3"
        className='btn btn-primary w-full'
        // onClick={() => setModalData(item)}
        >Booking Now</label>
       
      </div>
    </div>
  </div>
  );
};

export default AddProductCard;