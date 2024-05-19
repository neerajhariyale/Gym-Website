import React from 'react'
 

const OurClasses = () => {
  return (
    <div className='mt-5 w-11/12 h-contain border rounded-xl mx-auto items-center justify-evenly  flex flex-col mb-6 '>
      <div>
      <p className="text-center mt-8 font-bold text-2xl">OUR CLASSES</p>
        <div className="w-16 border-2 border-yellow-500 ml-6"></div>
            <p className="text-center mt-4 font-bold text-xl mb-6">WHAT WE CAN OFFER </p>
      </div>

      <div className='w-11/12 flex justify-evenly mt-8 mb-6'>
        <div className='flex flex-col gap-4 border shadow-lg rounded-lg cursor-pointer transition duration-300 hover:scale-105' >
            <img src= "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='h-64 w-52 object-cover p-2' />
            <p className='font-bold mb-2 mx-auto'>Cardio</p>
        </div>

        <div className='flex flex-col gap-4 border shadow-lg cursor-pointer transition duration-300 hover:scale-105'>
            <img src= "https://images.pexels.com/photos/1544774/pexels-photo-1544774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='h-64 w-52 object-cover p-2'/>
            <p className='font-bold mb-2 mx-auto'>Boxing</p>
        </div>

        <div className='flex flex-col gap-4 border shadow-lg cursor-pointer transition duration-300 hover:scale-105'>
            <img src=  "https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='h-64 w-52 object-cover p-2' />
            <p className='font-bold mb-2 mx-auto'>Zumba</p>
        </div>

        <div className='flex flex-col gap-4 border shadow-lg cursor-pointer transition duration-300 hover:scale-105'>
            <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='h-64 w-52 object-cover p-2'/>
            <p className='font-bold mb-2 mx-auto'>Body Lifting</p>
        </div>
      </div>

      
    </div>
  )
}

export default OurClasses
