import React from 'react';
// import { GoReport } from 'react-icons/go';


const AdvertistCard = ({product}) => {
  const {Brand, Img, address, condition, new_price, phone, phone_model, post_time,  resell_price, sellerName, selling_address, use_time} = product
  console.log(product);
  return (
    <div>
    <div className="card w-full bg-base-100 shadow-2xl">
      <figure><img className='w-full md:max-h-48' src={Img} alt="Shoes" /></figure>
      <div className="card-body">
        <div className="card-actions items-center justify-between">
          <h2 className="card-title font-bold ">
            {phone_model}
            <div className="badge font-bold badge-secondary">{post_time}</div>
          </h2>

          <button  className='text-2xl cursor-pointer hover:text-red-500'></button>
        </div>
        <div className='flex justify-between'>
          <span> <span className='text-warning font-bold '> Brand: {Brand}</span> </span>
          <span>Use Time: {use_time} Mt</span>
        </div>
        <div className="card-actions items-center justify-start">
          <div className=""><span className='text-black font-semibold text-xl'>Resells: {resell_price} $</span> <span className='text-primary font-bold text-xl'></span>$</div>
          <div className="badge badge-outline">New Price: {new_price} $</div>
        </div>
        <span>available: ({use_time})</span>


        <span className='text-sm pb-4 md:min-h-16 text-gray-500'><span className='text-blue-500 font-bold'>Location: {selling_address}</span> </span>

        {/* <p>Location Address: {selling_address}</p> */}
        <div className='flex gap-3'>
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src="https://placeimg.com/192/192/people" alt='' />
            </div>
          </div>
          <div>
            <h4>Seller: <span>{sellerName}</span></h4>
            <span>Phone: <span>{phone}</span></span>
          </div>
        </div>


      </div>
      <div>
        {/* <label
          htmlFor="my-modal-3"
          className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full'
          onClick={() => setModalData(item)}
        >Booking Now</label> */}

      </div>
    </div>
  </div>
  );
};

export default AdvertistCard;