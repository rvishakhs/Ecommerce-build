import React from 'react'
import Productcard from './Productcard'
import watch from "../images/watch2.JPG"
import headphone from "../images/headphone.jpg"
import laptop from "../images/laptop.jpg"
import eco from "../images/eco.jpg"
import { useSelector } from 'react-redux'

function PopularProductts() {

    const productsState = useSelector((state) => state?.products?.product)
    
  return (
    <div className='grid grid-cols-2 px-2 gap-3 md:grid-cols-6 lg:grid-cols-10'>  
        <div className='col-span-2 w-[250px] h-[330px] flex flex-col gap-2 bg-white rounded-xl my-2 py-4 px-4'>
            <div className='flex flex-row items-center space-x-2'>
                <img 
                    src={watch}
                    alt="watch"
                    className='w-12 h-12 object-contain'
                />
                <h3 className='font-bold text-base cursor-pointer'>Smart Watch</h3>
            </div>
            <div className='flex flex-row items-center space-x-2'>
                <img 
                    src={headphone}
                    alt="watch"
                    className='w-12 h-12 object-contain'
                />
                <h3 className='font-bold text-base cursor-pointer'>Head Phones</h3>
            </div>
            <div className='flex flex-row items-center space-x-2'>
                <img 
                    src={laptop}
                    alt="watch"
                    className='w-12 h-12 object-contain'
                />
                <h3 className='font-bold text-base cursor-pointer'>Laptops</h3>
            </div>

        </div>              
        <div className='col-span-2 w-[250px] h-[330px] relative flex flex-col gap-3 bg-slate-800 rounded-xl my-2'>
                <img 
                    src={eco}
                    alt="ecoimage"
                    className="w-[250px] h-[330px] object-fill rounded-xl"
                />
                <p className='absolute top-4 left-4 text-white font-medium text-sm font-sans tracking-wider'>15% OFF</p>
                <p className='absolute top-10 left-8 text-white font-semibold text-2xl font-sans tracking-wider'>Home Speakers</p>
                <p className='absolute top-[80px] left-8 text-white/80 font-extralight text-xs font-sans tracking-wider'>From $399 or $16.62/mo.</p>
                <p className='absolute top-[100px] left-8 text-white/80 font-extralight text-xs font-sans tracking-wider'>For 24 months.</p>
        </div>
        {productsState && productsState?.map((item, index) => {
            return(
                <div key={index}className='col-span-2'>
                    <Productcard 
                            id={item?._id}
                            brand={item?.brand} 
                            tittle={item?.tittle} 
                            rating={item?.totalrating} 
                            desc={item?.description} 
                            price={item?.price}
                        />
                </div>
            )                                     
        })}              
    </div>    
  )
}

export default PopularProductts