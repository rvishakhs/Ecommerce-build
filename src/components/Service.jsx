import React from 'react'
import { MdOutlineLocalShipping, MdOutlineLocalOffer } from "react-icons/md";
import { AiOutlineGift } from "react-icons/ai";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsCreditCard } from "react-icons/bs";
function Service() {
  return (
    <div className='flex flex-row gap-x-10 overflow-x-scroll scrollbar-hide justify-between py-5 px-4'>
        <div className='flex items-center gap-2 '>
            <MdOutlineLocalShipping className='w-9 h-9' />
            <div className='flex gap-y-1 pl-3 justify-start  flex-col'>
                <p className='font-bold text-black text-base'>Free Shipping</p>
                <p className='text-xs'>From all orders above $100</p>
            </div>
        </div>
        <div className='flex items-center gap-2'>
            <AiOutlineGift className='w-9 h-9' />
            <div className='flex gap-y-1 pl-3 justify-start  flex-col'>
                <p className='font-bold text-black text-base'>Daily Surprise Offers</p>
                <p className='text-xs'>Save up to 25% off</p>
            </div>
        </div>
        <div className='flex items-center gap-2'>
            <TfiHeadphoneAlt className='w-8 h-8' />
            <div className='flex gap-y-1 pl-3 justify-start  flex-col'>
                <p className='font-bold text-black text-base'>Support 24/7</p>
                <p className='text-xs'>Shop with an agent</p>
            </div>
        </div>
        <div className='flex items-center gap-2'>
            <MdOutlineLocalOffer className='w-8 h-8' />
            <div className='flex gap-y-1 pl-1 justify-start  flex-col'>
                <p className='font-bold text-black text-base'>Affordable Prices</p>
                <p className='text-xs'>Get Factory direct prices</p>
            </div>
        </div>
        <div className='flex items-center gap-2'>
            <BsCreditCard className='w-8 h-8' />
            <div className='flex gap-y-1 pl-1 justify-start  flex-col'>
                <p className='font-bold text-black text-base'>Secure Payments</p>
                <p className='text-xs'>100% Protected Payments</p>
            </div>
        </div>
    </div>
  )
}

export default Service