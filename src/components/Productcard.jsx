import React from 'react'
import watch from "../images/watch1.JPG"
import watchalt from "../images/watch2.JPG"
import StarRatings from 'react-star-ratings';
import { MdOutlineCompareArrows } from "react-icons/md";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { BsBagPlus } from "react-icons/bs";
import { useLocation } from 'react-router-dom';

function Productcard({grid}) {
    
    let location = useLocation();
    
    
    return (

        <div className={`${location.pathname === "/store" ? `col-span-${grid}  ${grid === 2 ? "flex flex-col" : "flex flex-row"}  bg-white rounded-xl my-2 ` 
        : "w-[250px] h-[330px] group relative gap-3 bg-white rounded-xl my-2"}`}>
        <div className={`${grid === 2 ? "w-[200px] group h-[200px]  py-2" : "w-[250px] group h-[220px]  py-2"}`}>
            <img 
                src={watch}
                className="w-[250px] group-hover:hidden h-[200px] rounded-t-xl object-contain"
                alt='productimage'
            />
            <img 
                src={watchalt}
                className="w-[250px] hidden group-hover:block h-[200px] rounded-t-xl object-contain"
                alt='productimage'
            />
            </div>
        <div className={`${location.pathname === "/store" ? `pt-4 ${grid === 2 ? "px-2 py-2" : "px-3  py-2"}` : "space-y-1 px-3"} `}>
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
        <div className='absolute flex items-center top-4 right-3'>
            <AiOutlineHeart
                className="w-6 h-6 cursor-pointer hover:scale-105"
                />
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