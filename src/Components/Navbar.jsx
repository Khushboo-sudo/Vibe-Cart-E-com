import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import Login from '../Pages/Login';
import Modal from '../Pages/Modal';
import Register from '../Pages/Register';
import { setSearchProduct } from '../Redux/Feature/productSlice';


function Navbar() {

const dispatch =useDispatch()
const navigate = useNavigate()
 const product=useSelector(state=>state.cart.products)

const [isLogin, setIsLogin] = useState(true)
 const [isModelOpen, setIsModelOpen] = useState(false)
 const [search, setSearch] = useState()

 const openSignUp =()=>{
  setIsLogin(false)
  setIsModelOpen(true)
 }

 const openLogin =()=>{
  setIsLogin(true)
  setIsModelOpen(true)
 }
 
 const handleSearch=(e)=>{
 e.preventDefault()
 dispatch( setSearchProduct(search))
 navigate("/filter-data")
 }


  return (
   <nav className='bg-white shadow-md '>
     <div className='container text-gray-700  mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
        <div className=' text-lg font-bold mx-4'>
           <Link  to='/'>Vibe-Cart</Link> 
          </div> 
          {/* search */}
        <div className='relative  flex-1  mx-4' > 
          <form onSubmit={handleSearch}>
          <input type="text"  placeholder='Search-Item' className='w-full  border py-2 px-4 rounded-full    ' onChange={(e)=>setSearch(e.target.value)}/>
          <FaSearch  className='absolute top-3 right-3 '/>

          </form>
          
         </div>

        <div className='flex  items-center space-x-4 '>
         <Link to='/cart' className='relative'>
          <FaShoppingCart className='text-lg' />
          {product.length > 0 && (
            <span className='absolute top-0 text-xs font-bold w-4 left-3 bg-red-600 rounded-full flex justify-center items-center text-white'>
              {product.length}</span>
           
          )}
          </Link>

         <button className='hidden md:block' onClick={()=>setIsModelOpen(true)}> Login|Register</button>  
         <button className='block md:hidden'><FaUserCircle /></button> 
          </div>
        
     
        </div>
        <div className='flex   text-red-700 justify-center items-center py-4 space-x-25 font-bold text-md '>
          <Link to={'/'} className='hover:underline '>Home</Link>
          <Link to={'/shop'} className='hover:underline '>Shop</Link>
          <Link to={'/'} className='hover:underline '>Contact</Link>
          <Link to={'/'} className='hover:underline '>About</Link>

        </div>
        <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen} >
            {isLogin? <Login openSignUp={openSignUp} /> :<Register openLogin={openLogin} /> }
        </Modal>
   </nav>
  )
}

export default Navbar