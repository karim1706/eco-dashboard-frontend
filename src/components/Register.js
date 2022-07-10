import React, {useState, useEffect} from 'react';
import Header from './Header';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Register() {

    const navigate = useNavigate();


  useEffect(() => {
    if(localStorage.getItem('user-info'))
    {
      navigate(() => '/add');
    }
  }, [navigate])

  const [name, setName]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");

  const signUp = async () => {
    //let item = { name, email, password };

  let result =  await axios.post('http://localhost:8000/api/register', {
      name: name,
      email: email,
      password: password,
    })

    localStorage.setItem('user-info', JSON.stringify(result.data));
    navigate('/add');
  }

  return (
    <>
    <Header />
    <div className='col-sm-6 offset-sm-3'>
        <h1>REGISTRATION PAGE</h1>

        <form id='registerForm'>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control mb-2" placeholder='name'/>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control mb-2" placeholder='email'/>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control mb-4" placeholder='password'/>
        </form>
        
        <button onClick={signUp} className='btn btn-success offset-sm-5'>Sign Up</button>
    </div>
    </>
  )
}

export default Register