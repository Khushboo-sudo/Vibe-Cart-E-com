import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa6";
function Footer() {
  return (
    <footer className=' bg-gray-900 text-white border py-4 px-4 md:px-16 lg:px-24 '>
      <div className=' container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-2'>
      <div >
        <h2 className='text-xl font-semibold'>Vibe-Cart</h2>
        <p className='text-md mt-4 text-gray-300'>Empowering your shopping experience, one click at a time where quality meets convenience for a seamless journey.</p>
      </div >
      <div className='flex flex-col md:items-center'>
      <h2 className='text-xl font-semibold'>Quick Links</h2>
      <ul className='mt-4 space-y-2 text-md text-gray-300 '>
      
       <li> <Link to={"/"} className='hover:underline ' >Home</Link></li>
       <li> <Link to={"/shop"} className='hover:underline '>Shop</Link></li>
        <li><Link to={"/"} className='hover:underline'>About Us</Link></li>
        <li><Link to={"/"} className='hover:underline'> Contact Us</Link></li>
      </ul>
      </div>
      <form className=' items-center justify-center '>
        <h2 className='text-xl font-semibold'>Follow Us</h2>
        <div className='flex mt-4 text-2xl space-x-5 text-gray-300'>
        <FaTwitter />
        <FaFacebook />
        <GrInstagram />
        <FaLinkedin />
        </div>
        <div className=' mt-8  '>
          <input type="email" placeholder='Enter Email ' className='w- full border shadow rounded-l-md px-3 py-2 ' />
          <button className='bg-red-700 py-2 px-2  text-md font-semibold border rounded-r-md border-red-700 hover:bg-red-600 '>Subscribe</button>
          </div>
        </form>
      </div>
      
      <div className='container text-gray-500 text-sm mx-auto flex flex-col md:flex-row justify-between items-center  border-t p-2 '>
        <p className='text-white font-md'>&copy;2024 Vibe-Cart All right reserved</p>
        <div className='text-white'  >
          <a  href="" className='hover:underline' > Privacy Policy</a>&
          
          <a href="" className='hover:underline'> Terms of Service</a>
        </div>

      </div>
    </footer>
    
  )
}

export default Footer