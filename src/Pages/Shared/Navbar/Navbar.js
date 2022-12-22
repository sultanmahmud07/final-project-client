import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import logo from '../../../Assat/phone-img/shop (1).png'

const Navbar = () => {
  const {user, logOut} =useContext(AuthContext)

  const handleSignOut = () => {
    logOut()
    .then( () => {
      toast('Logout success')
    })
    .catch(error => console.error(error))
    // console.log("clikd");
  }


  const manuItems = <React.Fragment>
  <li><Link className='font-semibold' to="/home">Home</Link></li>
  <li><Link className='font-semibold' to="/products">Products</Link></li>
  <li><Link className='font-semibold' to="/advertised">Advertise</Link></li>
  <li><Link className='font-semibold' to="/blog">Blog</Link></li>
  {
    user?.uid &&  <li><Link className='font-semibold' to="/dashboard">Dashboard</Link></li>
  }
 {
  user?.uid ?  <li><button onClick={handleSignOut}  className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white text-white font-bold'>Sign Out</button></li> :  <li><Link className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white text-white font-bold' to="/login">Login</Link></li>
 }
</React.Fragment>
  return (
    <div className='shadow-lg mb-5'>
      <div className='common-w'>
        <div className="navbar flex justify-between">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {
                  manuItems
                }
              </ul>
            </div>
            <Link to='/'>
            <div className='flex items-end'>
              <img className='w-14 h-14' src={logo} alt="" />
              <div className="text-black text-2xl font-semibold"><span className='text-primary text-5xl font-bold'>B</span>echa<span className='text-primary text-2xl font-bold'>K</span>ena</div>
            </div>
            </Link>
            
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              {
                manuItems
              }
            </ul>
          </div>
          <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;