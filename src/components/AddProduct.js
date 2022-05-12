import axios from 'axios';
import React, {useState} from 'react';
import Header from './Header';

function AddProduct() {

  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const saveProducts = async () => {
    console.log(name, file, price, description);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('price', price);
    formData.append('name', name);
    formData.append('description', description);

    await axios.post('http://localhost:8000/api/addproduct',formData)
    console.log("Product added successfuly !");

    document.getElementById('addProductForm').reset();
  }

  return (
    <>
      <Header />
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