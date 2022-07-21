import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import Header from './Header';
import axios from 'axios';

function Home() {

  const [data, setData]=useState([]); 

  useEffect( () => {
    
    getAllDatas();
    
  }, []);

  
  const getAllDatas = async () => {
    let result = await axios.get('http://localhost:8000/api/list');
    setData(result.data);
  } 

  return (
    <>
        <Header />    
        <h1>E-com</h1>
        <h3 style={{textAlign: 'center'}}>Let's have a look to our amazing products !</h3>
      <div className='container-fluid'>
          <div className='row'>
            {
              data.map((item, key)=> 
                  <div className="card" style={{width: 350, marginLeft: 12, border: "0.5px solid 	#B8B8B8", marginBottom: 10}} key={item.id}>
                    <img 
                        className="card-img-top rounded mx-auto d-block p-2" 
                        src={"http://localhost:8000/"+item.file_path} 
                        alt="Card cap" 
                        style={{width:130, height: 200}} />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p>{item.price}</p>
                      <p className="card-text">{item.description}</p>
                      <Link to={"view/"+item.id} class="btn btn-primary offset-sm-3">See product</Link>
                    </div>
                  </div>
              )
            }
          </div>
        </div>
      </>   
  )
}

export default Home