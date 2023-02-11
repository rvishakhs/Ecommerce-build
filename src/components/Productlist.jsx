import React from 'react'
import laptop from "../images/laptop.jpg"
import camera from "../images/camera.jpg"
import tv from "../images/tv.jpg"
import watch from "../images/watch.jpg"
import game from "../images/game.png"
import headphone from "../images/headphone.jpg"
import acc from "../images/acc.jpg"
import tab1 from "../images/tab1.jpg"

function Productlist() {
  return (
    <div className='rounded-2xl bg-white py-4  px-2'>
        <div className='flex flex-row flex-wrap divide-y-2 divide-x-0 md:divide-x-2 md:divide-y-0 py-4 gap-2  justify-start'>
            <div className='flex space-x-3 w-[325px] h-[120px] items-center  justify-center p-2 pt-4 px-4 '>
                <div className='space-y-2'>
                    <p className='font-medium '>Computers & Laptop</p>
                    <p className='font-normal hover:underline decoration-sky-500 decoration-2 leading-3 text-sm'>12 items</p>
                </div>
                <img
                    src={laptop}
                    alt="laptop"
                    className='w-28 h-20 object-cover'
                
                />
            </div>
            <div className='flex space-x-3 w-[325px] h-[120px]  items-center justify-center p-2 pt-4 px-4 '>
                <div className='space-y-2'>
                    <p className='font-medium '>Cameras & Videos</p>
                    <p className='font-normal hover:underline text-sm'>10 items</p>
                </div>
                <img
                    src={camera}
                    alt="laptop"
                    className='w-28 h-20 object-cover'
                
                />
            </div>
            <div className='flex space-x-3 w-[325px] h-[120px] items-center justify-center p-2 pt-4 px-4 '>
                <div className='space-y-2'>
                    <p className='font-medium '>Smart Television</p>
                    <p className='font-normal hover:underline text-sm'>4 items</p>
                </div>
                <img
                    src={tv}
                    alt="laptop"
                    className='w-28 h-20 object-cover'
                
                />
            </div>
            <div className='flex space-x-3 w-[325px] h-[120px] items-center justify-center p-2 pt-4 px-4 '>
                <div className='space-y-2'>
                    <p className='font-medium '>Smart Watches</p>
                    <p className='font-normal hover:underline text-sm'>8 items</p>
                </div>
                <img
                    src={watch}
                    alt="laptop"
                    className='w-28 h-20 object-cover'
                
                />
            </div>
            <div className='flex space-x-3 w-[325px] h-[120px] items-center justify-center p-2 pt-4 px-4 '>
                <div className='space-y-2'>
                    <p className='font-medium '>Music & Gaming </p>
                    <p className='font-normal hover:underline text-sm'>4 items</p>
                </div>
                <img
                    src={game}
                    alt="laptop"
                    className='w-28 h-20 object-cover'
                
                />
            </div>
            <div className='flex space-x-3 w-[325px] h-[120px] items-center justify-center p-2 pt-4 px-4 '>
                <div className='space-y-2'>
                    <p className='font-medium '>HeadPhones</p>
                    <p className='font-normal hover:underline text-sm'>
                        12 items
                    </p>
                </div>
                <img
                    src={headphone}
                    alt="laptop"
                    className='w-28 h-20 object-fit'
                
                />
            </div>
            <div className='flex space-x-3 w-[325px] h-[120px] items-center justify-center p-2 pt-4 px-4 '>
                <div className='space-y-2'>
                    <p className='font-medium '>Mobiles & Tablets</p>
                    <p className='font-normal hover:underline text-sm'>12 items</p>
                </div>
                <img
                    src={tab1}
                    alt="laptop"
                    className='w-28 h-20 object-cover'
                
                />
            </div>
            <div className='flex space-x-3 w-[325px] h-[120px] items-center justify-center p-2 pt-4 px-4 '>
                <div className='space-y-2'>
                    <p className='font-medium '>Accessories</p>
                    <p className='font-normal hover:underline text-sm'>12 items</p>
                </div>
                <img
                    src={acc}
                    alt="laptop"
                    className='w-28 pl-3 h-20 object-cover'
                
                />
            </div>
           </div> 
    </div>
  )
}

export default Productlist