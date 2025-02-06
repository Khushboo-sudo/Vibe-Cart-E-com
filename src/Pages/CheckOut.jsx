import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function CheckOut({setOrder}) {
  const  cart =useSelector(state=>state.cart)
  const navigate=useNavigate()

const [billingToggle, setBillingToggle] =useState(true)
const [shippingToggle, setShippingToggle] =useState(false)
const [paymentToggle, setPaymentToggle] =useState(false)
const [paymentMethod, setPaymentMethod] =useState("cod")
const [shippingInfo, setShippingInfo] =useState({
  address:"",
  city:"",
  zipCode:"",
})

const handelOrder =()=>{
  const newOrder={
  products:cart.products,
  orderNumber:"12345",
  shippingInfo: shippingInfo,
  totalPrice:cart.totalPrice,
  }
  setOrder(newOrder)
  navigate('/order-summary')
}
 


  return (
    <div className='container  mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
     <h2 className='text-2xl font-semibold mb-8'> CHECKOUT</h2>
      <div className='flex flex-col md:flex-row justify-between space-x-15 '>

        <div className='md:w-2/3'>

        {/* billing section */}
        <div className='border-2 border-gray-200 rounded-xl p-2 mb-6 '>
          <div className='flex justify-between items-center' onClick={()=>setBillingToggle(!billingToggle)}>
            <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
           {billingToggle ?<FaAngleUp />  :<FaAngleDown />  } 
            
          </div >
        <div className={`space-y-4 ${billingToggle?"":"hidden"}`}>
            <div >
             <label className='block text-gray-800 font-semibold mb-1'>Name</label>
             <input type="text" 
             placeholder='Enter Name'
             className='w-full py-2 px-2 border-2  border-gray-500 rounded '
             />
            </div>

            <div>
             <label className='block text-gray-800 font-semibold mb-1'>Email</label>
             <input type="email" 
             placeholder='Enter Email'
              className='w-full py-2 px-2 border-2  border-gray-500 rounded '
             />
            </div>

            <div>
             <label className='block text-gray-800 font-semibold mb-1'>Phone Number</label>
             <input type="text" 
             placeholder='Enter Phone Number'
              className='w-full py-2 px-2 border-2  border-gray-500 rounded '
             />
            </div>

          </div>
  
         </div>
         
        {/* Shipping section */}
        <div className='border-2 border-gray-200 rounded-xl p-2 mb-6  '>
          <div className='flex justify-between items-center' onClick={()=>setShippingToggle(!shippingToggle)}>
            <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
           {shippingToggle ?<FaAngleUp />  :<FaAngleDown />  } 
            
          </div >
        <div className={`space-y-4 ${shippingToggle?"":"hidden"}`}>
            <div >
             <label className='block text-gray-800 font-semibold mb-1'>Address</label>
             <input type="text" 
             placeholder='Enter Address'
             className='w-full py-2 px-2 border-2  border-gray-500 rounded '
             required
             onChange={(e)=>setShippingInfo({...shippingInfo, address:e.target.value})}

             />
            </div>

            <div>
             <label className='block text-gray-800 font-semibold mb-1'>City</label>
             <input type="text" 
             placeholder='Enter City'
              className='w-full py-2 px-2 border-2  border-gray-500 rounded '
              required
              onChange={(e)=>setShippingInfo({...shippingInfo, city:e.target.value})}
             
             />
            </div>

            <div>
             <label className='block text-gray-800 font-semibold mb-1'>Zip Code</label>
             <input type="text" 
             placeholder='Enter Zip Code'
              className='w-full py-2 px-2 border-2  border-gray-500 rounded '
              required
              onChange={(e)=>setShippingInfo({...shippingInfo, zipCode:e.target.value})}
             
             />
            </div>

          </div>

  
  
         </div>


        {/* Payment section */}
        <div className='border-2 border-gray-200 rounded-xl p-2 mb-6 '>
          <div className='flex justify-between items-center' onClick={()=>setPaymentToggle(!paymentToggle)}>
            <h3 className='text-lg font-semibold mb-2'>Payment Method</h3>
           {paymentToggle ?<FaAngleUp />  :<FaAngleDown />  } 
            
          </div >
        <div className={`space-y-4 ${paymentToggle?"":"hidden"}`}>
            <div className='flex items-center mb-2'>
             <input 
             type="radio" 
             name="payment"
             checked={paymentMethod==="cod"}
             onChange={()=>setPaymentMethod("cod")}
             />
             <label className='block text-gray-800 font-semibold mb-1'>Cash On Delivery</label>
            </div>

            <div className='flex items-center mb-2'>
             <input 
             type="radio" 
             name="payment"
             checked={paymentMethod==="dc"}
             onChange={()=>setPaymentMethod("dc")}
             />
             <label className='block text-gray-800 font-semibold mb-1'>Debit Card</label>
            </div>
{paymentMethod=== "dc" && (
  <div className='bg-gray-100 p-4 rounded-lg mb-4 mt-4'>
    <h2 className='text-xl font-semibold mb-4'>Debit Card Information</h2>
    <div className='mb-4'>
        <label className='block text-gray-700 font-semibold mb-2' >Card Number</label>
        <input type="text" 
             placeholder='Enter Card Number'
              className='w-full p-2 border-2  border-gray-500 rounded '
              required
             />
    </div>
    <div className='mb-4'>
      <label className='block text-gray-700 font-semibold mb-2'>Card Holder Name</label>
      <input type="text" 
             placeholder='Enter Card Holder Name'
              className='w-full py-2 px-2 border-2  border-gray-500 rounded '
              required
             />
    </div>
    <div className='flex justify-between mb-4'>
   <div  className='w-1/2 mr-2'> 
    <label className='block text-gray-700 font-semibold mb-2'>Expire Date</label>
    <input type="text" 
             placeholder='MM/YY'
              className='w-full py-2 px-2 border-2  border-gray-500 rounded '
              required
             />
   </div>
   <div className='w-1/2 ml-2'> 
    <label className='block text-gray-700 font-semibold mb-2'>CVV</label>
    <input type="text" 
             placeholder='Enter CVV'
              className='w-full py-2 px-2 border-2  border-gray-500 rounded '
              required
             />
    </div>
    </div>
  </div>
)}
           
          </div>
         </div>

        </div>
        {/* product details */}
        <div className='md:w-1/3 p-6  shadow-xl rounded '>
         <h2 className='text-lg font-semibold mb-8'>Order Summary</h2>
         <div className='space-y-4 mb-4'>
          { cart.products.map((product, i)=>(
            <div key={i} className='flex justify-between '>
              <div className='flex items-center '>
                <img src={product.image} alt={product.name} className='w-20 h-20 object-contain rounded'  />
                <div className='ml-10 text-gray-700'>
                  <h4 className='text-md font-semibold'>{product.name}</h4>
                  <p className='text-gray-600'>${product.price}x{product.quantity} </p>
                </div>
                <div className='ml-30 text-gray-700 font-semibold'>${(product.totalPrice).toFixed(2)}</div>
              </div>
            </div>
          ))}
         </div>
         <div className='flex justify-between text-gray-700 text-md font-semibold mb-4 border-t border-gray-500  p-4 '>
                          <span className='text-md font-bold ml-1'>Total Price</span>
                          <span >${cart.totalPrice.toFixed(2)}</span>
                        </div>
                        <button className='w-full bg-red-700 text-white py-1.5 px-1 text-md font-semibold hover:bg-red-800' onClick={handelOrder}>Place Order</button>
                  
        </div>
      </div>
    </div>
  )
}

export default CheckOut