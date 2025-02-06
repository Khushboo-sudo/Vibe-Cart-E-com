import React from 'react'
import ItemCard from '../Components/ItemCard'
import { useSelector } from 'react-redux'

function Shop() {
   
    const products=useSelector(state=>state.product)
  return (
    <div className="  container mx-auto py-4 px-4 md:px-16 lg:px-24 cursor-pointer">
        <h1 className="text-2xl font-bold mb-6 text-center">Shop</h1>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-4 lg:grid-cols-5 gap-6 cursor-pointer">
          {products.products.map((product, i ) => (
          
            <ItemCard key={i} product={product} />
          ))}
        </div>
      </div>
  )
}

export default Shop