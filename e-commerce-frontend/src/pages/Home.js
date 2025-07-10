import { useState,useEffect } from 'react';
import Productcard from '../components/Productcard';
import { useSearchParams } from 'react-router-dom';


const Home = () => {

 const [products,setProducts] = useState([]);
const [searchparams, setSearchParams] = useSearchParams()


 useEffect(() => {
  fetch('http://localhost:5000/api/v1/product?'+searchparams).then(res => res.json()).
  then(res => setProducts(res.products))
  
 },[searchparams])
  
  
  
  return (

 <div>

    <h1 id="products_heading" className='text-3xl text-center'>Latest Products</h1>

    <section id="products" className="container mt-5">
      <div className="row">
       {products.map(product => <Productcard product={product} />)}
       </div>
    </section>

   
</div>
      
  
  )
}

export default Home;