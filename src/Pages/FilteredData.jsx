import React from 'react'
import { useSelector } from 'react-redux'
import ItemCard from '../Components/ItemCard'
import shoppingbag from '../assets/shoppingbag.png'
function FilteredData() {
    const filterData=useSelector(state=>state.product.FilteredData)
  return (
    <div className='mx-auto px-4 md:px-16 lg:px-24 py-12'>
        {filterData.length>0 ? 
        
       <>
       <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 cursor-pointer'>
            {filterData.map((product)=>(
              <ItemCard product ={product}></ItemCard>
              
            ))}
        </div>
        </>  

        :<div className='flex flex-col  justify-center items-center'>
                   <img src={shoppingbag} alt="" className='h-80'/>
                   <p className='font-semibold text-2xl text-red-700 '>No Matching product Found</p>
                 </div> 
            }
        
    </div>
  )
}

export default FilteredData