import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate =useNavigate();
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  // console.log(imageHostKey);

  const { data: specialties, isLoading } = useQuery({
    queryKey: ['specialty'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/productSpecialty');
      const data = await res.json();
      return data;
    }
  })

  if (isLoading) {
    return <Loading></Loading>
  }

  if (loading) {
    return <p>Loading...</p>
  }
  // Add a Product handle>>>>>>>>>>
  const handleAddProduct = data => {
    const image = data.image[0];
    // console.log(data);
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imgData => {
        setLoading(true)
        if (imgData.success) {
          const product = {
            brand: data.brand,
            condition: data.condition,
            email: data.email,
            image: imgData.data.url,
            location: data.location,
            name: data.name,
            newPrice: data.newPrice,
            phone: data.phone,
            productName: data.productName,
            sellPrice: data.sellPrice,
            specialty: data.specialty,
            useTime: data.useTime
          }

          setLoading(false)
          // toast.success('Product add successfully')
          // console.log(product);


          // save product information to the database >>>>>
          fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization:  `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
          })
          .then(res => res.json())
          .then(result => {
            console.log(result);
            Swal.fire(
              `Your Product added successfully`,
              'You clicked the button!',
              'success'
            )
            navigate('/dashboard/myproducts')
          })


        }
      })

  }





  return (
    <div className='bg-gray-100 pb-10'>
      <h2 className='text-2xl'>Add Doctors</h2>
      <div className='flex justify-center items-center'>
        <form onSubmit={handleSubmit(handleAddProduct)} className='max-w-xl rounded-xl shadow-2xl card-body bg-white'>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Product Name</span>
            </label>
            <input type="text" {...register("productName", { required: true })} className="input input-bordered" />
            {errors.name && <span className='text-red-700'>Please provited your name</span>}
          </div>

          {/* flex setup */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">New Price</span>
              </label>
              <input type="number" {...register("newPrice", { required: true })} className="input input-bordered" />
              {errors.email && <span className='text-red-700'>Please provited price</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Sell Price</span>
              </label>
              <input type="number" {...register("sellPrice", { required: true })} className="input input-bordered" />
              {errors.email && <span className='text-red-700'>Please provited price</span>}
            </div>

          </div>
          {/* flex setup */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Used Time (Month)</span>
              </label>
              <input type="number" {...register("useTime", { required: true })} className="input input-bordered" />
              {errors.email && <span className='text-red-700'>used time</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Condition</span>
              </label>
              <input type="text" {...register("condition", { required: true })} className="input input-bordered" />
              {errors.email && <span className='text-red-700'>Condition</span>}
            </div>

          </div>
          {/* flex setup */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Brand</span>
              </label>
              <input type="text" {...register("brand", { required: true })} className="input input-bordered" />
              {errors.email && <span className='text-red-700'>Brand</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Post Time</span>
              </label>
              <input type="text" {...register("condition", { required: true })} className="input input-bordered" />
              {errors.email && <span className='text-red-700'>Condition</span>}
            </div>

          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Product image</span>
              </label>
              <input type="file" {...register("image", { required: true })} className="input input-bordered" />
              {errors.image && <span className='text-red-700'>Please provited your photo</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Category</span>
              </label>
              <select className="select select-bordered w-full " {...register("specialty")}>
                <option value='iphone'>Iphone</option>
                <option value='xiaomi'>Xiaomi</option>
                <option value='oppo'>Oppo</option>
                <option value='samsung'>Samsung</option>
                {/* {
                  specialties.map(specialty => <option
                    key={specialty._id}
                    value={specialty.name}
                  >{specialty.name}</option>)
                } */}
              </select>

            </div>

          </div>
          <div className='text-primary text-2xl pt-7'>Seller Information</div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Seller Name</span>
            </label>
            <input type="text" {...register("name", { required: true })} className="input input-bordered" />
            {errors.email && <span className='text-red-700'>Please provited your phone name</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Phone</span>
            </label>
            <input type="text" {...register("phone", { required: true })} className="input input-bordered" />
            {errors.email && <span className='text-red-700'>Please provited your phone number</span>}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input type="email" {...register("email", { required: true })} className="input input-bordered" />
            {errors.email && <span className='text-red-700'>Please provited your email</span>}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Location</span>
            </label>
            <input type="location" {...register("location", { required: true })} className="input input-bordered" />
            {errors.email && <span className='text-red-700'>Please provited your location</span>}
          </div>



          <div className="form-control mt-6">
            <input type="submit" className="btn btn-primary" value="Add Product" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;