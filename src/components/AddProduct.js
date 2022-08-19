import axios from 'axios';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import Header from './Header';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function AddProduct() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const saveProducts = async () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('price', price);
    formData.append('name', name);
    formData.append('description', description);

    const MySwal = withReactContent(Swal)

    await axios.post('http://localhost:8000/api/addproduct',formData)
    console.log("Product added successfuly !");
    document.getElementById('addProductForm').reset();

    MySwal.fire({
      title: <strong>Good job!</strong>,
      html: <i>You successfuly created the product !</i>,
      icon: 'success'
    })

    navigate('/');
  }

  return (
    <>
      {/*<Header />*/ }  
      <h1>AddProduct</h1>
      <div className='col-sm-6 offset-sm-3'>
        <form id='addProductForm'>
          <input type="text" className="form-control mb-4" placeholder='name' onChange={(e)=>setName(e.target.value)}/>
          <input type="file" className="form-control mb-4" placeholder='file' onChange={(e)=>setFile(e.target.files[0])}/>
          <input type="text" className="form-control mb-4" placeholder='price' onChange={(e)=>setPrice(e.target.value)}/>
          <input type="text" className="form-control mb-4" placeholder='description' onChange={(e)=>setDescription(e.target.value)}/>
        </form>
        
      
        <button className='btn btn-primary col-sm-6 offset-sm-3' onClick={saveProducts}>Add Product</button>
      </div>
    </>
  )
}

export default AddProduct