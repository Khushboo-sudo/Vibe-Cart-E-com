import React from 'react'
import { useNavigate } from 'react-router-dom';

function Order({order}) {

const navigate = useNavigate()
 // Check if order is defined  
 if (!order || !order.shippingInfo) {  
    return (  
      <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>  
        <h2 className='text-xl font-bold mb-4'>Order Not Found</h2>  
        <p className='text-md font-semibold mb-4'>No order details are available. Please return to the checkout page.</p>  
      </div>  
    );  
  }  

  return (
    <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
       <h2 className='text-3xl font-bold mb-8'> Thanks for your Order!</h2>
       <p className='text-xl font-semibold mb-6 text-gray-800 '>Your order has been placed successfully. You will recieve an email confirmation shortly.</p>
       <div className='bg-gray-300 border border-gray-400 rounded shadow p-4'>
       
            <h3 className='text-2xl text-gray-800  font-bold  '>Order Summary</h3>
            <p className='text-lg text-gray-600 font-semibold mt-2'>Order Number: {order.orderNumber}</p>
       
        <div className=''>
            <h3 className='text-xl text-gray-800  font-bold mt-3 mb-4'>Shipping Information</h3>
            <p className='text-md text-gray-600 font-semibold mt-2' >{order.shippingInfo.address } </p>
            <p className='text-md text-gray-600 font-semibold mt-1'>{order.shippingInfo.city }</p>
            <p className='text-md text-gray-600 font-semibold mt-1'>{order.shippingInfo.zipCode } </p>
        </div>
            <div>
            <h3 className='text-xl text-gray-800  font-bold mt-3 mb-4'>Items Ordered</h3>  
            {
                order.products.map((product, i)=>(

                    <div key={i} className='flex justify-between items-center text-gray-800 text-md mb-2 font-semibold'>
                      <p className=''>${product.name}(x{product.quantity})</p>
                      <p>${(product.price)*(product.quantity)}</p>

                    </div>
                ))
            }
            </div>
            <div className='flex justify-between mt-4 font-bold text-lg text-gray-800 '>
                <span>Total Price</span>
                <span>${order.totalPrice.toFixed(2)}</span>
            </div>
          
       </div>
       <div className='flex justify-start mt-4'>
            <button className='bg-green-600  p-2 text-white text-lg rounded font-semibold hover:bg-green-700 mr-4 ' >Track Order</button>
            <button className='bg-red-600 p-2 text-white text-lg rounded font-semibold  hover:bg-red-700 ml-4 ' onClick={()=>navigate("/")}> Continue Shopping</button>
           </div>
    </div>
  )
}

export default Order