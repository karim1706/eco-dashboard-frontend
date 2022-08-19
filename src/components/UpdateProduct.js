import React, {useEffect, useState} from 'react';
import Header from './Header';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function UpdateProduct(props) {
   
  const params = useParams(); 
  let productId = params.id;

  const navigate = useNavigate();
  const baseUrl = 'http://localhost:8000/api/update/';
  const [data, setData]= useState([]);               

  useEffect( () => {

    const choosedProduct =  async() => {
      let result =  await axios.get('http://localhost:8000/api/product/' + productId); 
      setData(result.data); 
    }

    choosedProduct();

  }, [productId]);

  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");


  const MySwal = withReactContent(Swal)

  const editProduct = async (productId) => {
    let products  = {name, file, price, description}; console.log(products);
    await axios.put(baseUrl + data.id, {
      name: name,
      file: file,
      price: price,
      description: description
    })

    MySwal.fire({
      title: <strong>Good job!</strong>,
      html: <i>You successfuly update the product N° {data.id} !</i>,
      icon: 'success'
    })

    navigate('/');
    console.log("Product updated successfuly !");
  }


 
  return (
    <>
      {/*<Header />*/ }  
      <h1>UpdateProduct</h1>

      <div className='col-sm-6 offset-sm-3'>
        <form id='addProductForm'>  
          
          <input type='text' defaultValue={data.name || '' } onChange={(e)=>setName(e.target.value)}/> <br /><br />
          <input type='text' defaultValue={data.description || ''} onChange={(e)=>setDescription(e.target.value)}/><br /><br />
          <input type='text' defaultValue={data.price || ''} onChange={(e)=>setPrice(e.target.value)}/><br /><br />
          <img style={{height: 500, width: 300}} src={'http://localhost:8000/'+ data.file_path} alt='Product view' onChange={(e)=>setFile(e.target.value)}/> <br /><br />
          <input type='file' defaultValue={data.file_path || ''} onChange={(e)=>setFile(e.target.value)}/><br /><br /><br /> 
          {console.log(data.file_path)}
        </form>

        <button onClick={editProduct}>Update Product</button>
      </div>

    </>
  )
}

export default UpdateProduct