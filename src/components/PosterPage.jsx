import React from 'react'
import watch from "../images/watchface.png"
import mac from "../images/macbook.png"
import phone from "../images/appleiphone.png"

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
        <div className=' relative w-[330px] h-[480px] rounded-2xl'>
            <img 
                src={mac}
                alt="watchface"
                className='w-[330px]  h-[480px] object-cover rounded-2xl'
            />
            <div className='absolute top-14 left-8 space-y-2'>
                <p className='uppercase font-normal text-base text-black tracking-wide leading-6'>Studio Display</p>
                <p className='font-extrabold text-2xl text-black tracking-wide leading-8'>600 Nits of brightness</p>
                <p className='font-light text-sm text-black tracking-normal leading-4'>15-inch liquid retina display 
                </p>
                <p className='pt-12 pl-10 font-bold text-gray-500/70 text-2xl'>Macbook Pro - 16</p>

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