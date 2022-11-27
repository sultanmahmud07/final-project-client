import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { GoReport } from 'react-icons/go';

const ItemCard = ({ item, setModalData }) => {
  const [report, setReport] =useState(false)
  const { _id, Brand, Img, address, buy, condition, new_price, resell_price, post_time, use_time, phone_model, selling_address, seller_info } = item


 

  const handleReport = (item) => {
    const reportedProduct = {
      Brand,
      phone_model,
      Img,
      address,
      buy,
      condition,
      new_price,
      resell_price,
      post_time,
      sellerName: seller_info.name,
      phone: seller_info.email,
      selling_address,
      use_time,
      repo_id: _id
      
    }

    fetch('http://localhost:5000/reports', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reportedProduct)
    })
    .then(res => res.json())
    .then(data => {
      console.log('save user', data);
      toast.success(`${item.phone_model} report to admin is success!!`)
      if(data.acknowledged){
        setReport(true)
      }

      // setCreateUserEmail(email)
      // getUserToken(email)
      
  
    })

    // console.log(reportedProduct);
  }

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
         
          <button disabled={report} onClick={() => handleReport(item)} className='text-2xl cursor-pointer hover:text-red-500'><GoReport></GoReport></button>
         </div>
          <div className='flex justify-between'>
            <span> <span className='text-warning font-bold '> Brand:</span> {Brand}</span>
            <span>Use Time: {use_time}Mt</span>
          </div>
          <div className="card-actions items-center justify-start">
            <div className=""><span className='text-black font-semibold text-xl'>Resells:</span> <span className='text-primary font-bold text-xl'>{resell_price}</span>$</div>
            <div className="badge badge-outline">New Price: {new_price} $</div>
          </div>


          <span className='text-sm pb-4 md:min-h-16 text-gray-500'><span className='text-blue-500 font-bold'>Location:</span> {selling_address}</span>

          {/* <p>Location Address: {selling_address}</p> */}
          <div className='flex gap-3'>
            <div className="avatar online">
              <div className="w-12 rounded-full">
                <img src="https://placeimg.com/192/192/people" alt='' />
              </div>
            </div>
            <div>
              <h4>Seller: <span>{seller_info.name}</span></h4>
              <span>Phone: <span>{seller_info.email}</span></span>
            </div>
          </div>
          

        </div>
        <div>
          <label
            htmlFor="my-modal-3"
            className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full'
            onClick={() => setModalData(item)}
          >Booking Now</label>

        </div>
      </div>
    </div>
  );
};

export default ItemCard;