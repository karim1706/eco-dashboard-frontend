import React, {useState} from 'react';
import Header from './Header';
import axios from 'axios';
import {Table} from 'react-bootstrap'

function SearchProduct() {

    const [data, setData] = useState([]);

    const search = async (key) => {
        console.log(key)
        if(key.length >= 3)
        {
            let result = await axios.get(`http://localhost:8000/api/search/`+key)
            console.warn(result.data)
            setData(result.data);
        }else if(key.length === 0){return false;}

    }

  return (
    <>
    <Header />
    <div className='col-sm-6 offset-sm-3'>
        <h1>SearchProduct</h1>
        <input onChange={(e)=>search(e.target.value)} type="text" className='form-control' placeholder='Search Product'/>
    
        <Table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Price</td>
              <td>Description</td>
              <td>Image</td>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item, key)=> 
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  <td><img style={{width:100}} src={"http://localhost:8000/"+item.file_path} alt="Products Images"/></td>
                </tr>
              )
            }
          </tbody>
        </Table>
    </div>
    </>
  )
}

export default SearchProduct