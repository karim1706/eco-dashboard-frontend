import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import ProductList from './components/ProductList';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import SearchProduct from './components/SearchProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/update/:id" element={<ProtectedRoutes Comp={UpdateProduct}/>}/>
          <Route path="/add" element={<ProtectedRoutes Comp={AddProduct}/>}/>
          <Route path="/search" element={<ProtectedRoutes Comp={SearchProduct}/>}/>
          <Route path="/" element={<ProtectedRoutes Comp={ProductList}/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
