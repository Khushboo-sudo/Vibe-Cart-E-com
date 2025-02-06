import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FaCarSide } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa6";

function ProducDetail() {
    const{id} =useParams()
    const products=useSelector(state=>state.product.products)
    const [product, setProduct] =useState()

    useEffect(()=>{
   const newItem=products.find(product=>product.id===parseInt(id))
   setProduct(newItem)
    }, [id, products])
if(!product)return <div>Loading......</div>

  return (
    <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 '>
     <div className='flex flex-col md:flex-row gap-x-16'>
        
       <div className='w-1/2 px-4 shadow-xl md:px-8 h-96 flex justify-center '>
       <img src={product.image} alt={product.name} className='h-full' />
       </div>
       <div className='w-1/2 p-4 shadow-xl md:p-16 flex flex-col items-center gap-y-2 '>
         <h2 className='text-3xl font-semibold mb-2'>{product.name}</h2>
          <p className='text-xl font- font-semibold text-gray-800 mb-4'>${product.price}</p>

          <div className='flex items-center mb-4 gap-x-4'>
            <label htmlFor="quantity" className='mr-2 text-xl  font-semibold'>Quantity:</label>
             <input id='quantity' type="number" min="1" className='border p-1 w-16' placeholder='0'/>
             <button className='bg-red-600 text-white py-1.5 px-4 hover:bg-red-800'>Add to cart</button>
          </div>

          <div className='flex flex-col gap-y-4 mt-4 text-lg font-semibold text-gray-700'>
            <p className='flex items-center'>
            <FaCarSide className='mr-1 ' />
              Delivery & Return
            </p>
            <p className='flex items-center'>
            <FaQuestion className='mr-1' />
              Ask a Question
            </p>

          </div>
        </div>
      </div>
      <div className='mt-8'>
       <h3 className='text-xl font-bold mb-2'>Product Description </h3>
       <p>Product description will goes here</p>
      </div>
    </div>
  )
}

export default ProducDetail