import React, {useState} from 'react';
import axios from 'axios';

function Register() {

  const [name, setName]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");

  const signUp = async () => {
    //let item = { name, email, password };

    await axios.post('http://localhost:8000/api/register', {
      name: name,
      email: email,
      password: password,
    })
                .then(response => console.log(response))
                .catch((error) => console.log(error));
  }

  return (
    <div className='col-sm-6 offset-sm-3'>
        <h1>REGISTRATION PAGE</h1>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control mb-2" placeholder='name'/>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control mb-2" placeholder='email'/>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control mb-4" placeholder='password'/>

        <button onClick={signUp} className='btn btn-success'>Sign Up</button>
    </div>
  )
}

export default Register