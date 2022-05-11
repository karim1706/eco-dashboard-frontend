import React, {useState, useEffect} from 'react';
import Header from './Header';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if(localStorage.getItem('user-info'))
    {
      navigate('/add');
    }
  })

  async function login() 
  {
    let loginResult = await axios.post('http://localhost:8000/api/login', {
      email: email,
      password: password
    })

    localStorage.setItem('user-info', JSON.stringify(loginResult.data));
    navigate('/add');
  }

  return (
    <>
      <Header />

      <h1>Login Page</h1>
      <div className='col-sm-6 offset-sm-3'>
          <input type="email" placeholder='email' className='form-control mb-4' onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" placeholder='password' className='form-control mb-4' onChange={(e)=>setPassword(e.target.value)}/>

          <button className='btn btn-primary offset-sm-5' onClick={login}>Login</button>
      </div>
    </>
  )
}

export default Login