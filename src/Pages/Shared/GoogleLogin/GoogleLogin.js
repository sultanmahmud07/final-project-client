import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useToken from '../../../hooks/UseToken';

const GoogleLogin = () => {
  const {googleSignIn} =useContext(AuthContext);
  // const [googlUserEmail, setGoogleUserEmail] = useState('');
  // const [token] =useToken(googlUserEmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';
  const handleGoogle = () => {
    googleSignIn()
    .then(result => {
      const user = result.user;
      console.log(user);
      // setGoogleUserEmail()
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