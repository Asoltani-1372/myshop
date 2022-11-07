import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { BrowserRouter as Router, Routes , Route , Navigate } from 'react-router-dom';


function App() {
  const user = true
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/Product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Login:id" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/Register" element={user ? <Navigate to="/" /> : <Register />} />
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
