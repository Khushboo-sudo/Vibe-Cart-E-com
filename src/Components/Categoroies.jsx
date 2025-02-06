import Men  from '../assets/Men.jpeg'
import Women from '../assets/Women.jpeg'
 import Children from '../assets/Children.jpeg'
export const categoryInfo =[
    {
        name : "Women",
        image: Women
    },
    {
        name : "Men",
        image: Men,
        
    },
    {
        name : "Children",
        image: Children
    }
]

function Categoroies() {
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10'>
       
        {
            categoryInfo.map((item, index)=>(

        <div key={index} className=' relative h-90  transform transition-transform duration-300 hover:scale-105 mt-8 cursor-pointer '>
            <img src={item.image} alt={item.name}  className='w-full h-full object-cover rounded-3xl border-gray-300 shadow-md'/>
            <div className='absolute top-30 left-7'>
            <p className='text-2xl text-gray-800 font-bold'>{item.name}</p>
            <p className='text-xl text-gray-700 mt-3'>View All</p>
            </div>

        </div>

            ))
        }
        
    </div>
  )
}

export default Categoroies