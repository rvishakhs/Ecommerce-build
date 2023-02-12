import React from 'react'
import watch from "../images/watch1.JPG"
import ReactStars from "react-rating-stars-component";

function SpecialProducts() {
  return (
    <div className='w-[400px] h-[350px] flex  bg-white rounded-2xl'>
        {/* Left Section */}
        <div className='p-1 flex flex-col '>
            <img 
                src={watch}
                className="w-[180px] h-[250px] object-contain"
                alt='productimage'
            />
            <div className='flex flex-row space-x-1 pl-3 '>
                <img 
                    src={watch}
                    className="w-[70px] border  border-black h-[50px] object-contain"
                    alt='productimage'
                />
                <img 
                    src={watch}
                    className="w-[70px] border  border-black h-[50px] object-contain"
                    alt='productimage'
                />
            </div>
        </div>
        {/* Right Section */}
        <div className='flex flex-col px-2 py-4 space-y-2'>
            <p className='font-medium text-red-800  text-sm '>Harvells</p>
            <p className='font-bold text-black text-sm'>Harwells Watch collections</p>  
            <ReactStars
                count={5}
                value={4}
                size={24}
                activeColor="#ffd700"
                edit={false}
            />
            <p className='font-semibold text-red-700 text-lg'>$60.00   <span  className='line-through font-semibold text-gray-500 text-sm'>  $ 75.00</span> </p>
            <div className='flex space-x-2'>
                <p></p>
            </div>
        </div>
    </div>
  )
}

export default SpecialProducts