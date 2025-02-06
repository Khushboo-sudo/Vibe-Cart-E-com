import React from 'react'
import { IoStarSharp } from "react-icons/io5";
import { addToCart } from '../Redux/Feature/cartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function ItemCard({product}) {

  const dispatch = useDispatch()

  const handelAddToCart =(e, product)=>{
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart(product))
    console.log("products", product);
    alert("Product added successfully")
  }

  return (
    <Link to={`/product/${product.id}`}>
    <div  className= ' bg-white p-4  shadow-2xl  rounded-2xl  relative border  border-3xl border-gray-300 transform transition-transform duration-300 hover:scale-105 cursor-pointer' >
        <img src={product.image} alt={product.name} className='w-full h-48 object-contain mb-4'/>
        <h2 className='text-xl font-semibold text-gray-800'>{product.name}</h2>
        <p className='text-lg mt-2 font-semibold text-gray-700'>${product.price}</p>
        <div className=' flex items-center mt-2 '>
        <IoStarSharp className=' text-yellow-400' />
        <IoStarSharp  className=' text-yellow-400'/>
        <IoStarSharp className=' text-yellow-400'/>
        <IoStarSharp className=' text-yellow-400'/>
        <IoStarSharp className=' text-gray-200'/>
        </div>
        <div className=' absolute bottom-4 right-3 flex items-center justify-center w-8 h-8 bg-red-700 group text-black text-sm font-bold rounded-full hover:w-30 hover:bg-red-800 transition-all ' onClick={(e)=>handelAddToCart(e, product)}>
            <span className='group-hover:hidden text-2xl mb-0.5'>+</span>
            <span className='hidden group-hover:block '>Add To Cart</span>
       
        </div>
    </div>
    </Link>
  )
}

export default ItemCard