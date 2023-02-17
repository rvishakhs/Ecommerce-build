import React from 'react'
import watch from "../images/watchface.png"
import mac from "../images/macbook.png"
import phone from "../images/appleiphone.png"
import home from "../images/minihomepod.JPG"
import { TfiApple } from "react-icons/tfi";
import { SiApple } from "react-icons/si";

function PosterPage() {
  return (
    <div className='flex flex-row space-x-4'>
        <div className='bg-black/95 relative w-[330px] h-[480px] rounded-2xl'>
            <img 
                src={watch}
                alt="watchface"
                className='w-[330px]  h-[480px] object-cover rounded-2xl'
            />
            <div className='absolute top-14 left-8 space-y-2'>
                <p className='uppercase font-normal text-base text-white tracking-wide leading-6'>Big Screen</p>
                <p className='font-extrabold text-2xl text-white tracking-wider leading-8'>Apple Watch series 8</p>
                <p className='font-light text-sm text-white tracking-normal leading-4'>From $59.99/mo. for 24 months
                </p>

            </div>
        </div>
        <div className=' bg-[#9d9494] relative w-[330px] h-[480px] rounded-2xl'>
            <img 
                src={mac}
                alt="watchface"
                className='w-[330px]  h-[480px] object-contain rounded-2xl'
            />
            <div className='absolute top-14 left-8 space-y-2'>
                 <div className='mt-4 ml-6 flex gap-2 items-center'>
                    <SiApple className="w-10 h-10 text-black" />
                    <p className='font-extrabold text-2xl pt-2 text-black tracking-wide leading-6'>Macbook Pro </p>
                </div>
                <p className='font-bold  text-lg  text-black tracking-wide leading-8'>Supercharged by M2 Pro chip</p>
                <div className='pl-16 pt-40 '>
                    <p className='font-bold text-sm text-black'>from <span className='font-bold text-xl text-black'>2499 $</span></p>
                    <button className='px-4 py-2 mt-3 border !border-black rounded-full text-black font-bold'>BuyNow</button>
                </div>
            </div>
        </div>
        <div className=' bg-white relative w-[330px] h-[480px] rounded-2xl'>
            <img 
                src={home}
                alt="watchface"
                className='w-[330px]  h-[480px] object-contain rounded-2xl'
            />
            <div className='absolute top-10 left-8 space-y-2'>
                 <div className='mt-4 ml-6 pl-[91px] flex gap-2 items-center'>
                    <TfiApple className="w-9 h-9 text-black" />
                </div>
                <div className='pl-[90px] pt-[120px] '>
                    <p className='font-bold text-sm text-black'>from <span className='font-bold text-xl text-black'>99 $</span></p>

                    <button className='px-4 py-2 -ml-3 mt-36 border !border-black rounded-full text-black font-bold'>BuyNow</button>
                </div>
            </div>
        </div>
        <div className=' relative w-[330px] h-[480px] rounded-2xl'>
            <img 
                src={phone}
                alt="watchface"
                className='w-[330px]  h-[480px] object-cover rounded-2xl'
            />
            <div className='absolute top-14 left-8 space-y-2'>
                <p className='uppercase font-normal text-base text-white tracking-wide leading-6'>SmartPhone</p>
                <p className='font-extrabold text-2xl text-white tracking-wide leading-8'>IPhone 14 Pro Max </p>
                <p className='font-light text-sm text-white tracking-normal leading-4'>Now in Deep Purple, From $1999/Mo.<br></br> For 24 months  
                </p>
            </div>
        </div>

    </div>
  )
}

export default PosterPage