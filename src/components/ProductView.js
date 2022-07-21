import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import { NavItem } from 'react-bootstrap';

function ProductView() {

    const params = useParams();
    let productId = params.id;

  //const navigate = useNavigate();
  const [data, setData]= useState([]);               

  useEffect( () => {

    const choosedProduct =  async() => {
      let result =  await axios.get('http://localhost:8000/api/product/' + productId); 
      setData(result.data); 
    }

    choosedProduct();

  }, [productId]);

  return (
    <>
      <h1>ProductView</h1> <br /><br />
        <div className='container'>
          <div className='row border border-dark'>
            <div className='col-lg-6 border-end border-dark'>
              <img 
                  className="card-img-top rounded mx-auto d-block p-2" 
                  src={"http://localhost:8000/"+data.file_path} 
                  alt="Card cap" 
                  
              />
            </div>
            <div className='col-lg-6 border'>
              
              <h2> {data.name} </h2> <br />
              <h3> {data.price} </h3> <br />
              <h4>Description</h4>
              <p>{data.description} </p>
              <p>Lorem ipsum dolores est</p>
              <p>Lorem ipsum dolores est</p>
              <p>Lorem ipsum dolores est</p>
              <p>Lorem ipsum dolores est</p>
              <p>Lorem ipsum dolores est</p>
              <p>Lorem ipsum dolores est</p>
              <p>Lorem ipsum dolores est</p>
              <p>Lorem ipsum dolores est</p>
              <p>Lorem ipsum dolores est</p>
              <p>Lorem ipsum dolores est</p>
              <p>Lorem ipsum dolores est</p>

              <button className='btn btn-success'>$ BUY $</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default ProductView