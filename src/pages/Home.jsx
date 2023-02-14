import React from 'react'
import Banner from '../components/Banner'
import BlogPostHome from '../components/BlogPostHome'
import MarqueeSection from '../components/MarqueeSection'
import Productlist from '../components/Productlist'
import Service from '../components/Service'
import { AiOutlineLeftCircle, AiOutlineRightCircle  } from "react-icons/ai";
import Productcard from '../components/Productcard'
import SpecialProducts from '../components/SpecialProduct'
import PopularProductts from '../components/PopularProductts'

function Home() {
  return (
    <div className='w-full h-full'>
        <div className='max-w-[1350px] mx-auto my-4'>
            <Banner />
        </div>
        <div className='w-full bg-gray-200 mx-auto pb-4 h-full '>
            <div className='max-w-[1350px] mx-auto my-4'>
                <Service />
            </div>
            <div className='max-w-[1350px] mx-auto my-4'>
                <Productlist />
            </div>
            <div className='max-w-[1350px] mx-auto my-4'>
                <MarqueeSection />
            </div>

            {/* Featured Products  */}
            <div className='max-w-[1350px] mx-auto my-4'>
                <div className='flex justify-between items-center my-6 py-2 px-2 '>
                    <p className='text-2xl  font-bold font-sans tracking-wider'>Featured Products</p>
                    <div className='hidden md:flex space-x-2 pr-5 mt-4'>
                    <AiOutlineLeftCircle className='w-6 h-6 cursor-pointer'/>
                    <AiOutlineRightCircle className='w-6 h-6 cursor-pointer' />
                    </div>
                </div>
                <div className='grid grid-cols-2 overflow-auto px-2 gap-3 md:grid-cols-6 lg:grid-cols-10'>
                    <div className='col-span-2'>
                        <Productcard />
                    </div>
                    <div className='col-span-2'>
                        <Productcard />
                    </div>
                    <div className='col-span-2'>
                        <Productcard />
                    </div>
                    <div className='col-span-2'>
                        <Productcard />
                    </div>
                    <div className='col-span-2'>
                        <Productcard />
                    </div>
                </div>               
            </div>

            {/* Popular Products */}
            <div className='max-w-[1350px] mx-auto my-4'>
                <div className='flex justify-between items-center my-6 py-2 px-2 '>
                    <p className='text-2xl  font-bold font-sans tracking-wider'>Our Popular Products</p>
                    <div className='hidden md:flex space-x-2 pr-5 mt-4'>
                    <AiOutlineLeftCircle className='w-6 h-6 cursor-pointer'/>
                    <AiOutlineRightCircle className='w-6 h-6 cursor-pointer' />
                    </div>
                </div>
                <PopularProductts />                           
            </div>



            {/* Special Products */}
            <div className='max-w-[1350px] mx-auto my-4'>
                <div className='flex justify-between items-center my-6 py-2 px-2 '>
                    <p className='text-2xl  font-bold font-sans tracking-wider'>Special Products</p>
                    <div className='hidden md:flex space-x-2 pr-5 mt-4'>
                    <AiOutlineLeftCircle className='w-6 h-6 cursor-pointer'/>
                    <AiOutlineRightCircle className='w-6 h-6 cursor-pointer' />
                    </div>
                </div>
                <div className='grid grid-cols-2 px-2 gap-3 md:grid-cols-4 lg:grid-cols-6'>
                    <div className='col-span-2'>
                        <SpecialProducts />
                    </div>
                    <div className='col-span-2'>
                        <SpecialProducts />
                    </div>
                    <div className='col-span-2'>
                        <SpecialProducts />
                    </div>
                </div>               
            </div>

            {/* Lattest Blog Posts */}
            <div className='max-w-[1350px] mx-auto my-4'>
                <div className='flex justify-between items-center my-6 py-2 px-2 '>
                    <p className='text-2xl  font-bold font-sans tracking-wider'>Our Lattest Blogs</p>
                    <div className='hidden md:flex space-x-2 pr-5 mt-4'>
                    <AiOutlineLeftCircle className='w-6 h-6 cursor-pointer'/>
                    <AiOutlineRightCircle className='w-6 h-6 cursor-pointer' />
                    </div>
                </div>
                <div className='grid grid-cols-2 px-2 gap-3 flex-wrap md:grid-cols-4 lg:grid-cols-8'>
                    <div className='col-span-2'>
                        <BlogPostHome />
                    </div>
                    <div className='col-span-2'>
                        <BlogPostHome />
                    </div>
                    <div className='col-span-2'>
                        <BlogPostHome />
                    </div>
                    <div className='col-span-2'>
                        <BlogPostHome />
                    </div>
                </div>               
            </div>
        </div>
    </div>
  )
}

export default Home