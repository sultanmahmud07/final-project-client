import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>


        </div>
        <div className="drawer-side ">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content bg-white">
            {/* <!-- Sidebar content here --> */}

            <li><Link to='/dashboard'>My Appointment</Link></li>
            <li><Link to='/dashboard/alluser'>user account</Link></li>


            {/* {
              isAdmin && <>
                <li><Link to='/dashboard/allusers'>All Users</Link></li>
                <li><Link to='/dashboard/adddoctor'>Add A Doctor</Link></li>
                <li><Link to='/dashboard/manegedoctors'>Manage Doctors</Link></li>
              </>
            } */}
          </ul>

        </div>
      </div>
      
    </div>
  );
};

export default DashboardLayout;