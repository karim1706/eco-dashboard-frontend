import React from 'react';
import '../App.css';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand className="navbar-brand" href="#home">E-Com</Navbar.Brand>
            <Nav className='mr-auto navbar_wrapper'>
                <Link to='/add'>Add Products</Link>
                <Link to='/update'>Update Products</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </Nav>
        </Navbar>
    </div>
    
  )
}

export default Header