import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const GoogleLogin = () => {
  const {googleSignIn} =useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';
  const handleGoogle = () => {
    googleSignIn()
    .then(result => {
      const user = result.user;
      console.log(user);
      navigate(from, {replace: true});
      toast('Google Login Successfully')
    })
    .catch(error => {
      console.log(error)
    })
  }
  return (
    <div>
      <button onClick={handleGoogle} className="btn btn-outline btn-primary w-full">CONTINUE WITH GOOGLE</button>
    </div>
  );
};

export default GoogleLogin;