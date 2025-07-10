import './App.css';
import Home from './pages/Home';
import Header from './pages/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import { useState } from 'react';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './components/Signup';

function App() {
  const [cartItems, setCartItems] = useState([]);
  
  
  
  return (
    <div className="App">
      <Router>
        <div>
          <Header cartItems={cartItems} />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/home' element={ <Home /> } />
           <Route path='/search' element={ <Home /> } />
           <Route path='/product/:id' element={ <ProductDetails cartItems={cartItems} setCartItems={setCartItems} /> } />
         <Route path='/cart' element={ <Cart cartItems={cartItems} setCartItems={setCartItems} /> } />
       <Route path='/login' element={ <Login /> } />
       <Route path='/signup' element={ <Signup /> } />
        </Routes>
    </div>
      </Router>
     
     <Footer />
   
    </div>
  );
}

export default App;
