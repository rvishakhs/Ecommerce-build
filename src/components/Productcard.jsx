import React from 'react'
import watch from "../images/watch.jpg"
import StarRatings from 'react-star-ratings';
import { MdOutlineCompareArrows } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { BsBagPlus } from "react-icons/bs";

function Productcard() {
  return (
    <div className='w-[250px] h-[320px] group relative gap-3 bg-white rounded-xl'>
        <img 
            src={watch}
            className="w-[250px] h-[200px] rounded-t-xl object-cover"
            alt='productimage'
        />
        <div className='space-y-1 px-3'>
            <p className='font-medium text-red-800 text-sm '>Harvells</p>
            <p className='font-bold text-black text-sm'>Harwells Watch collections</p>            
            <StarRatings
                rating={3}
                starRatedColor="yellow"
                numberOfStars={5}
                name='rating'
                starDimension="18px"
                starSpacing="2px"
            />        
            <p className='font-bold text-gray-500 '> $ 800</p>
        </div>
        <div className='absolute hidden  group-hover:block flex-col space-y-2 top-12 right-3 '>
            <MdOutlineCompareArrows className='w-6 h-6 cursor-pointer hover:scale-105'/>
            <AiOutlineEye className='w-6 h-6 cursor-pointer hover:scale-105'/>
            <BsBagPlus className='w-5 h-5 cursor-pointer hover:scale-105'/>
        </div>
    </div>
  )
}

export default Productcard