import React, { useState } from 'react'

function ChangeAddress({setAddress, setIsModelOpen }) {
    const [newAddress, SetNewAddress] = useState("")
    const onClose=()=>{
        setAddress(newAddress)
        setIsModelOpen(false)
    }
  return (
    <div className='container '>
        <h3 className='font-bold mb-3 text-xl'>Change Address</h3>
        <input type="text" placeholder='Enter Address' className='border w-full p-2 mb-4 rounded-md ' onChange={(e)=>SetNewAddress(e.target.value)}/>
        <div className='flex justify-end'>
            <button className='bg-gray-600 text-white text-md py-2 px-5 mr-2 rounded-full' onClick={()=>setIsModelOpen(false)}>Cancel</button>
            <button className='bg-blue-600 text-white text-md py-2 px-5 rounded-full' onClick={onClose}>Save</button>
        </div>
    </div>
  )
}

export default ChangeAddress