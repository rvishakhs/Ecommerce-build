import React from 'react'
import Productcard from './Productcard'
import watch from "../images/watch2.JPG"
import headphone from "../images/headphone.jpg"
import laptop from "../images/laptop.jpg"
import eco from "../images/eco.jpg"

function PopularProductts() {
  return (
    <div className='grid grid-cols-2 px-2 gap-3 md:grid-cols-6 lg:grid-cols-10'>  
        <div className='col-span-2 w-[250px] h-[330px] flex flex-col gap-2 bg-white rounded-xl my-2 py-4 px-4'>
            <div className='flex flex-row items-center space-x-2'>
                <img 
                    src={watch}
                    alt="watch"
                    className='w-12 h-12 object-contain'
                />
                <h3 className='font-bold text-base cursor-pointer'>Smart Watch</h3>
            </div>
            <div className='flex flex-row items-center space-x-2'>
                <img 
                    src={headphone}
                    alt="watch"
                    className='w-12 h-12 object-contain'
                />
                <h3 className='font-bold text-base cursor-pointer'>Head Phones</h3>
            </div>
            <div className='flex flex-row items-center space-x-2'>
                <img 
                    src={laptop}
                    alt="watch"
                    className='w-12 h-12 object-contain'
                />
                <h3 className='font-bold text-base cursor-pointer'>Laptops</h3>
            </div>

        </div>              
        <div className='col-span-2 w-[250px] h-[330px] relative flex flex-col gap-3 bg-slate-800 rounded-xl my-2'>
                <img 
                    src={eco}
                    className="w-[250px] h-[330px] object-fill rounded-xl"
                />
            <div></div>
            <div></div>

        </div>              
        <div className='col-span-2'>
            <Productcard />
        </div>
    </div>    
  )
}

export default PopularProductts