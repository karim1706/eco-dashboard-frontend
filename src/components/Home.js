import React, {useState, useEffect} from 'react';
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
        <h1>List of products, take a look !</h1>
      <div className='container'>
          <div className='row'>
            {
              data.map((item, key)=> 
                  <div className="card mr-4" style={{width: 350}} key={item.id}>
                    <img className="card-img-top" src={"http://localhost:8000/"+item.file_path} alt="Card  cap" style={{width:80}}/>
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p>{item.price}</p>
                      <p className="card-text">{item.description}</p>
                      <a href="#home" class="btn btn-primary">See product</a>
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