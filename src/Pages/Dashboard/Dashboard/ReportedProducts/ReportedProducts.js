import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../Shared/Loading/Loading';

const ReportedProducts = () => {

  const { data: reportItem , isLoading, refetch } = useQuery({
    queryKey: ['reportItem'],
    queryFn: async () => {
      const res = await fetch('https://final-project-server-zeta.vercel.app/reports');
      const data = await res.json();
      return data;
      // console.log(data)
    }
  })




  const handleDeleteProduct = product => {
    fetch(`https://final-project-server-zeta.vercel.app/reports/${product._id}`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          refetch();
         toast.success(`Product ${product.phone_model} deleted successfully`)

        }
        // console.log(data);
        refetch()
      })
  }


  if(isLoading){
    return <Loading></Loading>
  }

  return (
    <div>
      {/* <h1 className='text-3xl font-bold py-6'>Reported Products!</h1> */}
      <div className="overflow-x-auto">
        <table className="table w-full">

          <thead>
            <tr>
              <th>NO</th>
              <th>AVATAR</th>
              <th>NAME</th>
             
              <th>Delete</th>
             
            </tr>
          </thead>
          <tbody>
            {
              reportItem.map((product, i) =>
                <tr key={i}>
                  <th>
                    <label>
                      <span>{i + 1}</span>
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className=" w-32 h-32">
                          <img src={product.Img} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product.productName}</div>
                        <span className='flex'>Model: <div className=" opacity-50">{product.phone_model}</div></span>
                        <span>
                          <span>New price: </span><span>{product.new_price} $</span><br></br>
                          <span>Resell price: </span><span>{product.resell_price} $</span><br></br>
                          <span>Used time {product.use_time} month</span>
                        </span>
                      </div>
                    </div>
                  </td>
                 
                  <td>
                    {product.sellerName}
                    <br />
                    <span className="">{product.phone}</span><br></br>
                    <span className="badge badge-ghost badge-sm">{product.selling_address}</span>
                  </td>
                  <td>
                    <label onClick={() => handleDeleteProduct(product)} htmlFor="confirmation-modal" className="btn btn-secondary bg-red-600 text-white">Delete</label>
                  </td>
                 

                </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportedProducts;