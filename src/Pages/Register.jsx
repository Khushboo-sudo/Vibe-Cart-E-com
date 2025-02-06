import React from 'react'

function Register({openLogin}) {
  return (
    <div>
        <h2 className='text-2xl font-bold mb-4 '>Login</h2>
        <form >
        <div className='text-gray-800 mb-2'>
            <label className='block font-bold  mb-1 ' >Name</label>
            <input type="text" placeholder='Enter Name' className='w-full p-2 mb-2  border-2 border-gray-500 rounded'/>
        </div>

        <div  className='text-gray-800 mb-2'>
            <label className='block font-bold  mb-1'  >Email</label>
            <input type="email" placeholder='Enter Email' className='w-full p-2 mb-2 border-2 border-gray-500  rounded'/>
        </div>

        <div  className='text-gray-800 mb-2'>
            <label className='block font-bold  mb-1'  >Password</label>
            <input type="password" placeholder='Enter Password' className='w-full p-2 mb-2 border-2 border-gray-500  rounded'/>
        </div>
        <div  className='text-gray-800 mb-2'>
            <label className='block font-bold  mb-1'  >Confirm Password</label>
            <input type="password"  placeholder='Enter Confirm-Password' className='w-full p-2 mb-2 border-2 border-gray-500  rounded'/>
        </div>
       
        <button className='bg-red-600 w-full p-1 text-lg text-white font-semibold hover:bg-red-700'>Register</button>

        </form>

        <div className='flex justify-center items-center mt-4'>  
         <p className='text-md font-semibold '>Already have an account? </p>
         <button className='text-md  text-red-700 font-semibold ml-2 hover:underline' onClick={openLogin}>Login</button>
        </div>
        
       
    </div>
  )
}

export default Register