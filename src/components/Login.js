import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('user-info'))
    {
      navigate('/add');
    }
  }, [])

  return (
    <div>Login Page</div>
  )
}

export default Login