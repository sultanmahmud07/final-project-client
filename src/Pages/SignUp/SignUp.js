import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Swal from 'sweetalert2'
import toast from 'react-hot-toast';
import GoogleLogin from '../Shared/GoogleLogin/GoogleLogin';
import { data } from 'autoprefixer';

const SignUp = () => {
  // const [seller, setSeller] = useState('')
  const [error, setError] = useState('')
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { createUser, updateUser } = useContext(AuthContext)
  const navigate =useNavigate();



  const handleSigiUp = (data) => {
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('')
        Swal.fire(
          'Your Signin is Successfully',
          'Welcome to our shop!',
          'success'
        )

       const fromInfo = {
            userName: data.name,
            userEmail: data.email,
            userPass: data.password,
            role: data.role
        }
        console.log(fromInfo);

        //user profile update
        const userInfo = {
          displayName: data.name
        }
        updateUser(userInfo)
          .then(() => {
            toast("user name updated success")
            navigate('/')
            // saveUser(data.name, data.email)

          })
          .catch(err => console.log(err))
      })
      .catch(error => {
        console.error(error)
        setError(error.message)
      })
  }

  // const handleSeller = (data) => {
  //   setSeller('')
  //   console.log(seller);
  // }


  return (
    <div className=''>
      <div className='h-screen flex justify-center items-center'>
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl ">
          <div className="card-body">
            <div>
              <h3 className='text-2xl font-semibold text-center pb-5'>Sign Up</h3>
            </div>

            <form onSubmit={handleSubmit(handleSigiUp)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input type="text" {...register("name", { required: true })} className="input input-bordered" />
                {errors.name && <span className='text-red-700'>Please provited your name</span>}
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
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input type="password" {...register("password", { required: "passwrod in required", minLength: { value: 8, message: "password must be 8 cherecters long" }, pattern: { value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/, message: 'password must be strong and induce one capital letter' } })} className="input input-bordered" />
                {errors.password && <span className='text-red-700'>{errors.password.message}</span>}
                <label className="label">
                  <span className="label-text font-semibold text-red-700">{error}</span>
                </label>
              </div>

              <div>
                <label htmlFor='role' className="label">
                  <span className="label-text font-semibold">Register as</span>
                </label>
                <select {...register("role", { required: "User role is required!"})} className=" w-full select select-bordered">
                  <option value="buyer">Buyer</option>
                  <option value="seller">Seller</option>
                </select>
              </div>

              {/* <div className="form-control w-32">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text font-bold text-primary">Seller account</span>
                    <input type="checkbox" value={seller} onChange={() => handleSeller(setSeller('seller'))} className="checkbox checkbox-primary" />
                  </label>
                </div>
              </div> */}

              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value="SignUp" />
              </div>
            </form>


            <div>
              <div className='text-center p-1 text-sm'>
                <span>Already have an account?</span><span><Link to='/login' className='text-secondary font-semibold'>Please login</Link></span>
              </div>
              <div className="divider">OR</div>
              <GoogleLogin></GoogleLogin>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUp;