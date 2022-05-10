import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';


function ProtectedRoutes(props) {

    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem('user-info'))
        {
          navigate('/register');
        }
      })


    let Comp = props.Comp;
  return (
      <div>
            <Comp />
      </div>
  )
}

export default ProtectedRoutes