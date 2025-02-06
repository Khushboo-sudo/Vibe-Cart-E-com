import React from 'react'

function Modal({isModelOpen, setIsModelOpen, children}) {
    if(!isModelOpen) return null;
  return (
    <div className='fixed inset-0  bg-opacity-50 flex items-center justify-center z-50'style={{ backgroundColor: 'rgba(110, 120, 135, 0.5)' }}> 
        <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md'>
            <button className='absolute top-4 right-4 text-gray-300 text-3xl' onClick={()=>setIsModelOpen(false)}>&times;</button>
            <div>{children}</div>
        </div>
    </div>
  )
}

export default Modal