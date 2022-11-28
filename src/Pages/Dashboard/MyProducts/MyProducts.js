import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';
import Swal from 'sweetalert2'
import toast from 'react-hot-toast';

const MyProducts = () => {
  const [deleteingProduct, setDeleteingProduct] = useState(null)


  const cencelModal = () => {
    setDeleteingProduct(null)
  };



  const { data: products, isLoading, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      try {
        const res = await fetch('https://final-project-server-zeta.vercel.app/products', {
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        })
        const data = await res.json();
        return data;
      }
      catch (error) {

      }
    }
  })



  const handleDeleteProduct = product => {
    fetch(`https://final-project-server-zeta.vercel.app/products/${product._id}`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          refetch();
          Swal.fire(
            `Product ${product.productName} deleted successfully`,
            'You clicked the button!',
            'success'
          )

        }
        // console.log(data);
        refetch()
      })
  }

const handleAdvertised = (product) => {
  toast.success(`Your ${product.productName} advertised is successfully`)
}





  if (isLoading) {
    return <Loading></Loading>
  };
  return (
    <div>
      <h1 className='text-2xl mb-3'>Manage Product</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">

          <thead>
            <tr>
              <th>NO</th>
              <th><p className='text-end'>Product Information</p></th>
              <th></th>
              <th>Seller Info</th>
              <th>Delete</th>
              <th>Add To Advertised</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((product, i) =>
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
                          <img src={product.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product.productName}</div>
                        <span className='flex'>Brand: <div className=" opacity-50">{product.brand}</div></span>
                        <span>
                          <span>New price: </span><span>{product.newPrice} $</span><br></br>
                          <span>Resell price: </span><span>{product.sellPrice} $</span>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>Used time {product.useTime} Month only</p>
                    <span>Post date: {product.postTime}</span>
                    
                    
                  </td>
                  <td>
                    {product.name}
                    <br />
                    <span className="">{product.phone}</span><br></br>
                    <span className="">{product.email}</span><br></br>
                    <span className="badge badge-ghost badge-sm">{product.location}</span>
                  </td>
                  <td>
                    <label onClick={() => setDeleteingProduct(product)} htmlFor="confirmation-modal" className="btn btn-secondary bg-red-600 text-white">Delete</label>
                  </td>
                  <td>
                    <label onClick={() => handleAdvertised(product)} className="btn btn-primary text-white">advertised</label>
                  </td>

                </tr>)
            }

          </tbody>
        </table>
      </div>


      {
        deleteingProduct && <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deleteingProduct.productName}. It cannot be undon`}
          closeModal={cencelModal}
          successAction={handleDeleteProduct}
          successButton={`Delete`}
          modalData={deleteingProduct}
        ></ConfirmationModal>
      }
    </div>
  );
};

export default MyProducts;