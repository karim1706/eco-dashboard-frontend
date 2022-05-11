import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import "../App.css";
import {Link, useNavigate} from 'react-router-dom';

function Header() {

  const logged = localStorage.getItem('user-info');

  let user = JSON.parse(logged); 
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate('/register');
  }

  return (
    <div >
        <Navbar bg="dark" variant="dark" id="header" className='col-lg-12'>
            <Navbar.Brand className="navbar-brand col-lg-2" href="#home">E-Com</Navbar.Brand>
            <Nav className='mr-auto navbar_wrapper col-lg-8'>
                {
                  logged ?
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

            {logged ?
            <Nav className='col-lg-2'>
              
              <NavDropdown title={user.name} className="navDropDown col-lg-2">
    
                <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            :
            null
        }
        </Navbar>
    </div>
    
  )
}

export default Header