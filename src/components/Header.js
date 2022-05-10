import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import "../App.css";
import {Link} from 'react-router-dom';

function Header() {

  let user = JSON.parse(localStorage.getItem('user-info'));

  return (
    <div >
        <Navbar bg="dark" variant="dark" id="header" className='col-lg-12'>
            <Navbar.Brand className="navbar-brand col-lg-2" href="#home">E-Com</Navbar.Brand>
            <Nav className='mr-auto navbar_wrapper col-lg-8'>
                {
                  localStorage.getItem('user-info') ?
                  <>
                    <Link to='/add'>Add Products</Link>
                    <Link to='/update'>Update Products</Link>
                  </>
                    :
                  <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                  </>
                }  
            </Nav>

            <Nav className='col-lg-2'>
              <NavDropdown title={user.name} className="navDropDown col-lg-2">
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
        </Navbar>
    </div>
    
  )
}

export default Header