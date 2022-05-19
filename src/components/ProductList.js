import React, {useState, useEffect} from 'react';
import Header from './Header';
import {Table} from 'react-bootstrap';
import axios from 'axios';

function ProductList() {

  const [data, setData]=useState([]);

  useEffect( () => {
    
    getAllDatas();
    
  }, []);
  

  const deleteProduct = async (id) => {
    await axios.delete('http://localhost:8000/api/delete/'+id);
    getAllDatas();
    console.log('product successfuly deleted !')
  }

  
  const getAllDatas = async () => {
    let result = await axios.get('http://localhost:8000/api/list'); console.log(result)
    setData(result.data);
  } 

  return (
    <div>
        <Header />    
        <h1>ProductList</h1>
        <Table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Price</td>
              <td>Description</td>
              <td>Image</td>
              <td>Operations</td>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item)=> 
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  <td><img style={{width:100}} src={"http://localhost:8000/"+item.file_path} alt="Products Images"/></td>
                  <td><span onClick={()=>deleteProduct(item.id)} className='delete-btn'>Delete</span></td>
                </tr>
              )
            }
          </tbody>
        </Table>
    </div>
  )
}

export default ProductList