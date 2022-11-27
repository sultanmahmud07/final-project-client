import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2'

const AllUser = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/users');
      const data = await res.json();
      return data;
    }
  })


  const handleMakeAdmin = id => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success('Make admin successful')
          refetch();
        }
      })

  }



  // User Delete method >>>>>>>>>>>>>
  const handleDeleteUser = user => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
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
            ` ${user.email} deleted successfully`,
            'You clicked the button!',
            'success'
          )

        }
        // console.log(data);
        refetch()
      })
  }




  return (
    <div>
      <h1 className='text-2xl mb-3'>All users here </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">

          <thead>
            <tr>
              <th>No:</th>
              <th>Name</th>
              <th>Email</th>
              <th>Seller Verification</th>
              <th>Role</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, i) => <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {
                  user?.role === 'seller' && <button className='btn btn-success btn-sm'>Verified</button>
                  }
                  </td>
                <td>{user.role}</td>
                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-xs text-white btn-primary">Make Admin</button>}</td>
                <td><button onClick={() => handleDeleteUser(user)} className="btn btn-xs btn-outline btn-error">Delete</button></td>
              </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;