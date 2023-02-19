import React, { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import BlogPostHome from '../components/BlogPostHome';


function Blogs() {
    
    const [category, setshowcategory] = useState(true)
  
    return (

    <>
      <Meta head="Blogs | Ecomm"/>
      <Breadcrumb tittle="Blogs" />
      <main className='bg-gray-200 py-4'>
        <div className='max-w-7xl mx-auto grid grid-cols-2  md:grid-cols-7 lg:grid-cols-11 '>
            {/* Left Section */}
            <div className='col-span-2 gap-2 py-2 px-2 flex  flex-col'>
               {/* Category Section */}
               <div className='px-3 py-2 bg-white rounded-xl  '>
                  <div className='flex justify-between items-center'>
                    <p className='font-bold tracking-wide text-black text-base'>Shop our Products</p>
                     <MdOutlineArrowDropDownCircle 
                        className='w-5 h-5 cursor-pointer'
                        onClick={() => setshowcategory(!category)}
                        /> 
                  </div>
                  {category && (
                  <div className='py-2' >
                    <ul className='px-2 space-y-2'>
                      <li className='font-medium  text-sm cursor-pointer tracking-wide'>Smartphones</li>
                      <li className='font-medium  text-sm cursor-pointer tracking-wide'>Laptops</li>
                      <li className='font-medium  text-sm cursor-pointer tracking-wide'>Camera </li>
                      <li className='font-medium  text-sm cursor-pointer tracking-wide'>Television</li>
                      <li className='font-medium  text-sm cursor-pointer tracking-wide'>Accessories</li>
                    </ul>
                  </div>
                  )}
                </div> 
            </div>
            {/* Right Section */}
            <div className='col-span-2 md:col-span-5 mx-1 !md:mx-0 lg:mx-0 lg:col-span-9 flex flex-col items-center py-2'>
                <div className={`grid w-full grid-cols-2 md:grid-cols-6 gap-2 lg:grid-cols-10 flex-wrap`}>
                    <BlogPostHome />
                    <BlogPostHome />
                    <BlogPostHome />
                    <BlogPostHome />
                </div>   
            </div>
        </div>
      </main>
    </>
  )
}

export default Blogs