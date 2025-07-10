import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import auth from '../config/firebase'
import { signOut } from 'firebase/auth'

const Header = ({cartItems}) => {
   const navigate = useNavigate()
    const [log,setLog] = useState(false)

    
    useEffect(()=>{
      auth.onAuthStateChanged(function(user){
        if(user)
        {
          setLog(true)
          console.log("User Logged In")
        }
        else{
         setLog(false)
          console.log(" User Logged out")
        }
      })
    },[])
  function logout(){
signOut(auth)
  }
  
  
  
  return (
    <div>
         <nav className="navbar row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
           <h1 className='text-3xl text-white'>VMPCart</h1>
         
         
        </div>
      </div>

      <div className="col-12 col-md-4 mt-2 mt-md-0">
       <Search />
      </div>

      <div>
        <Link to={"/home"} className='text-white text-xl'> Home </Link>
      </div>
     <div className="col-12 col-md-3 mt-3 mt-md-0 text-center">
        
         {
              log?<button className='button-style hidden md:block text-white' onClick={logout} >Logout</button>:<button className='button-style hidden md:block mt-4 text-xl  text-white' onClick={()=>navigate("/login")}>Login</button>
         
            }
        
        <Link to={"/cart"}>
        <span id="cart" className="ml-7  text-xl">Cart</span>
        <span className="ml-1" id="cart_count">{cartItems.length}</span>
        </Link>
      </div>
    
            
    
    </nav>
    </div>
  )
}

export default Header