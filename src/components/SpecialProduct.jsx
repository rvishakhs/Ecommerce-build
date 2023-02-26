import React from 'react'
import watch from "../images/watch1.JPG"
import ReactStars from "react-rating-stars-component";
import ProgressBar from "@ramonak/react-progress-bar";
import Button from './Button';
import {  AiOutlineHeart } from "react-icons/ai";

function SpecialProducts() {
  return (
    <div className='w-[360px] md:w-[398px] lg:w-[420px] h-[350px] flex  bg-white rounded-2xl'>
        {/* Left Section */}
        <div className='p-1 flex flex-col relative'>
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
        <div className='absolute flex items-center top-5 right-3 '>
            <AiOutlineHeart
                    className="w-6 h-6 cursor-pointer hover:scale-105"
                />
        </div>
        <div className='absolute flex items-center top-5 left-3 '>
            <p className='px-2 py-1 bg-yellow-500 rounded-full text-xs font-bold'>-20 %</p>
        </div>
        </div>
        {/* Right Section */}
        <div className='flex flex-col px-2 py-4 md:py-8 space-y-2'>
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
            <div className=' space-x-2 flex items-center mb-2'>
                <p className='font-semibold text-black'>743 <span className='font-medium text-gray-500 text-sm'>Days</span></p>
                <div className='flex flex-row items-center space-x-1'>
                    <p className='px-2 py-1 bg-red-700 text-white text-sm rounded-full flex items-center'>05</p> :
                    <p className='px-2 py-1 bg-red-700 text-white text-sm rounded-full flex items-center'>05</p> :
                    <p className='px-2 py-1 bg-red-700 text-white text-sm rounded-full flex items-center'>05</p> 
                </div>
            </div>
            <p className='text-gray-400 font-medium text-sm'>Products left : <span>5</span></p>
            <ProgressBar 
                completed="5"
                bgColor='green'
                isLabelVisible={false}
                height="15px" 
            />
            <div className='mt-3'>
                <Button text="Grab Now" />
            </div>
        </div>
    </div>
  )
}

export default SpecialProducts