import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { RiCustomerServiceFill } from "react-icons/ri";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
import { RiDiscountPercentFill } from "react-icons/ri";

function Offers() {
const offerInfo=[
{
    icon:<MdLocalShipping  className='text-3xl text-red-700'/>,
    title: "Free Shopping ",
    description: "Get your orders delivered with no extra cost."
},
{
    icon:<RiCustomerServiceFill className='text-3xl text-red-700' /> ,
    title: "Support 24/7",
    description: "Get your orders delivered with no extra cost."
},
{
    icon:<FaMoneyCheckAlt className='text-2xl text-red-700' />,
    title: "100% Money Back",
    description: "Get your orders delivered with no extra cost."
},
{
    icon:<GrSecure className='text-3xl text-red-700'/>,
    title: "Secure Payment ",
    description: "Get your orders delivered with no extra cost."
},
{
    icon:<RiDiscountPercentFill className='text-3xl text-red-700' />,
    title: " Discount ",
    description: "Get your orders delivered with no extra cost."
}


]


  return (
    <div className='bg-white pb-8 pt-12 '>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4  '>
            {
              offerInfo.map((info, index)=>(
                 <div key={index} className='flex flex-col items-center text-center p-6 border border-gray-300 rounded-lg shadow-md  transform transition-transform duration-300 cursor-pointer hover:scale-105 bg-gray-200' >
                    {info.icon}
                    <h2 className='text-xl font-medium text-gray-800 mt-3'>{info.title}</h2>
                    <p className='text-md font-medium   text-gray-700 mt-3'>{info.description}</p>
                    
               </div>
              ))  
            }

        </div>
    </div>
  )
}

export default Offers