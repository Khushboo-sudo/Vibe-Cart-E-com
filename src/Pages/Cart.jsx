import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import shoppingbag from '../assets/shoppingbag.png'
import { MdDelete } from "react-icons/md";
import Modal from './Modal';
import ChangeAddress from '../Components/ChangeAddress';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../Redux/Feature/cartSlice';
import { useNavigate } from 'react-router-dom';



function Cart() {
  const dispatch = useDispatch()
  const  cart =useSelector(state=>state.cart)
  const [address, setAddress] = useState("sanjay colony")
  const [isModelOpen, setIsModelOpen] = useState(false)
  const navigate =useNavigate()
  

    
  return (
    <div className='container text-gray-700 mx-auto min-h-96 py-8 px-4 md:px-16 lg:px-24'>
      {cart.products.length > 0? 

      <div >
        
          <h2 className='text-2xl font-semibold mb-4'>SHOPPING CART</h2>

          {/* for cart Section */}
          <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8 '>
            <div className='md:w-2/3 shadow-xl py-4 px-4 rounded'>
            <div className='flex justify-between border-b items-center mb-4 text-xs font-bold '>
              <p>PRODUCT</p>
              <div className='flex space-x-8'>
                <p>PRICE</p>
                <p>QUANTITY</p>
                <p>SUBTOTAL </p>
                <p>REMOVE</p>
              </div>
            </div>
            {
              cart.products.map((product, i)=>(
                <div key={i} className='flex items-center justify-between p-3 border-b '>
                  <div className='md: flex items-center space-x-4'>
                    <img src={product.image} alt={product.name} className='w-16 h-16 object-contain rounded ' />
                    <div className='flex-1 ml-4'>
                     <h3 className='text-lg font-semibold'>{product.name}</h3>
                    </div>
                  </div>
                    <div className='flex space-x-9 items-center'>
                      <p className='text-md font-semibold'>${product.price}</p>
                      <div className='flex items-center justify-center border'>
                        <button className='text-xl font-bold px-1 border-l' onClick={()=>dispatch(decreaseQuantity(product.id))}>-</button>
                        <p className='text-xl px-2 '>{product.quantity}</p>
                        <button className='text-xl font-bold px-1 border-r' onClick={()=>dispatch(increaseQuantity(product.id))}>+</button>
                      </div>
                      <p className='text-md font-semibold px-1'>${(product.price * product.quantity).toFixed(2)}</p>
                      <button className='text-red-500 hover:text-red-700 text-2xl' onClick={()=>dispatch(removeFromCart(product.id))}><MdDelete /></button>
                    </div>
                </div>
              ))
            }

            </div>

                   {/* for address section */}
                  <div className=' md:w-1/3  shadow-lg bg-white p-6  rounded-lg'>
                     <p className='text-md font-bold mb-4'>CART TOTALS</p>
                     <div className='flex justify-between border-b pb-1'>
                      <span className='text-md font-bold'>Total Items:</span>
                      <span className='text-md font-bold'>{cart.totalQuantity}</span>
                     </div>
                     <div className='border-b mb-4 pb-2 '>
                      <h3 className='text-md font-bold mb-1.5 mt-3'>SHIPPING</h3>
                      <p className='text-md font-semibold ml-2 '>Shipping To: {" "}  <span>{address}</span></p>
                     
                      <button className='text-blue-700 text-md font-semibold hover:underline mt-1 ml-2' onClick={()=>setIsModelOpen(true)} >Change Address</button>
                        
                     </div>
                     <div className='flex justify-between text-md font-semibold mb-4'>
                          <span className='text-md font-bold'>Total Price</span>
                          <span>${cart.totalPrice.toFixed(2)}</span>
                        </div>
                        <button className='w-full bg-red-700 text-white py-1.5 px-1 text-md font-semibold hover:bg-red-800' onClick={()=>navigate("/checkout")}>Procced To Checkout</button>
                    </div>
          </div>
          <Modal isModelOpen={isModelOpen} setIsModelOpen ={setIsModelOpen}>
            <ChangeAddress setAddress={setAddress} setIsModelOpen ={setIsModelOpen}  />
          </Modal>
      </div> 
      
      
      :<div className='flex flex-col  justify-center items-center'>
        <img src={shoppingbag} alt="" className='h-80'/>
        <p className='font-semibold text-2xl text-red-700 '>Your Cart is Empty</p>
      </div> 
      
      }
    </div>
  )
}

export default Cart