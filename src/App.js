import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1>E-COMMERCE DASHBOARD PROJECT</h1>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/update" element={<ProtectedRoutes Comp={UpdateProduct}/>}/>
          <Route path="/add" element={<ProtectedRoutes Comp={AddProduct}/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
