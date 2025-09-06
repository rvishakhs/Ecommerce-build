import React from 'react'
import watchalt from "../images/watch2.JPG"
import ReactStars from "react-rating-stars-component";

function RandomProducts({id, tittle, price, img}) {
  return (
    <div className='w-full flex gap-2 '>
        <img 
            src={watchalt}
            className="w-[80px] h-[100px] object-contain"
            alt='productimage'
        />
        <div className='space-y-1 flex flex-col mt-1'>
            <p className='font-bold text-black  text-xs'>{tittle}</p>   
            {/* <ReactStars
                count={5}
                value={ratings}
                size={13}
                activeColor="#ffd700"
                edit={false}
            /> */}
            <p className='font-bold text-gray-500 text-sm '> $ {price}</p>
        </div>    
    </div>
  )
}

export default RandomProducts