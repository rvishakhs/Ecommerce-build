import React from 'react'
import main1 from "../images/main-banner.jpg"
import subimg1 from "../images/catbanner-01.jpg"
import subimg2 from "../images/catbanner-02.jpg"
import subimg3 from "../images/catbanner-03.jpg"
import subimg4 from "../images/catbanner-04.jpg"
import Button from './Button'

function Banner() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 px-4 py-4 gap-2'>
        <div className=' col-span-2 lg:col-span-2 md:col-span-4 relative'>
            <img 
                src={main1}
                alt="img"
                className="w-[620px] h-[425px] rounded-xl object-cover"
            />
            <div className='absolute flex flex-col top-[10%] md:top-[15%] left-8 md:left-12'>
                <h3 className='font-bold w-[170px] md:w-full text-xl text-orange-600 tracking-wider'>SUPERCHARGED FOR PROS</h3>
                <h2 className='font-bold text-4xl w-[170px] md:w-full font-sans tracking-wide my-3 '>Special Sale</h2>
                <h4 className='font-medium w-[170px] md:w-full'>From $999.00 or $41.62/mo.</h4>
                <h4 className='font-medium'>for 24 month.*</h4>
                <div className='mt-4 items-center flex'>
                    <Button text="Buy Now" />
                </div>
            </div>
        </div>
        <div className=' flex  col-span-1  lg:col-span-2 md:col-span-4  md:grid-flow-row flex-wrap gap-4 '>
            <div className='grid space-x-2 relative hover:scale-105 cursor-pointer transition duration-200 ease-in' >
                <img 
                    src={subimg1}
                    alt="img"
                    className=" !w-[300px] h-[200px] rounded-xl object-cover"
                />
                <div className='absolute flex flex-col top-[8%] left-4'>
                    <h3 className='font-bold text-base text-orange-600 tracking-wide uppercase'>Best Sale</h3>
                    <h2 className='font-bold text-xl font-sans tracking-wide my-2 '>Laptop Max</h2>
                    <h4 className='font-normal text-sm'>From $1699.00 or </h4>
                    <h4 className='font-normal text-sm'>$64.62/month</h4>
                </div>
            </div>
            <div className='grid relative hover:scale-105 cursor-pointer  transition duration-200 ease-in' >
                <img 
                    src={subimg2}
                    alt="img2"
                    className="w-[300px] h-[200px] rounded-xl object-cover"
                />
                <div className='absolute flex flex-col top-[8%] left-4'>
                    <h3 className='font-bold text-base text-orange-600 tracking-wide uppercase'>15% off</h3>
                    <h2 className='font-bold text-xl font-sans tracking-wide my-2 '>Smart Watch 7</h2>
                    <h4 className='font-normal text-sm'>Shop the lattest band </h4>
                    <h4 className='font-normal text-sm'>styles and colors </h4>
                </div>
            </div>
            <div className='grid relative hover:scale-105 cursor-pointer  transition duration-200 ease-in' >
                <img 
                    src={subimg3}
                    alt="img3"
                    className="w-[300px] h-[200px] rounded-xl object-cover"
                />
                <div className='absolute flex flex-col top-[8%] left-4'>
                    <h3 className='font-bold text-base text-orange-600 tracking-wide uppercase'>NEW Arrival</h3>
                    <h2 className='font-bold text-xl font-sans tracking-wide my-2 '>Buy IPad Air</h2>
                    <h4 className='font-normal text-sm'>From $599.00 or </h4>
                    <h4 className='font-normal text-sm'>$49.91/mo for 12 mo*</h4>
                </div>
            </div>
            <div className='grid  relative hover:scale-105 cursor-pointer  transition duration-200 ease-in' >
                <img 
                    src={subimg4}
                    alt="img5"
                    className="w-[300px] h-[200px] rounded-xl object-cover"
                />
                <div className='absolute flex flex-col top-[8%] left-4'>
                    <h3 className='font-bold text-base text-orange-600 tracking-wide uppercase'>Free Engraving</h3>
                    <h2 className='font-bold text-xl font-sans tracking-wide my-2 '>Airpods Max</h2>
                    <h4 className='font-normal text-sm'>High-Fidelity playback & </h4>
                    <h4 className='font-normal text-sm'>Ultra-low distortion</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner