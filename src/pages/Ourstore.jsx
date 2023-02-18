import React, { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

function Ourstore() {

  const [category, setshowcategory] = useState(true)
  return (
    <>
      <Meta head="Store | Ecomm"/>
      <Breadcrumb tittle="Our store" />
      <main className='bg-gray-200 py-4'>
        <div className='max-w-7xl mx-auto grid grid-cols-2  md:grid-cols-7 lg:grid-cols-10 '>
          {/* Left Section */}
            <div className='col-span-2 gap-2 py-2 px-2 flex  flex-col'>
              {/* Category Section */}
                <div className='px-3 py-2 bg-white rounded-xl  '>
                  <div className='flex justify-between items-center'>
                    <p className='font-bold tracking-wide text-black text-base'>Shop by Category</p>
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
              {/* Filers Section  */}
                <div className='px-3 py-2 bg-white rounded-xl'>
                  <div className='flex justify-between items-center'>
                      <p className='font-bold tracking-wide text-black text-base'>Filter By</p>
                      <MdOutlineArrowDropDownCircle 
                          className='w-5 h-5 cursor-pointer'
                          onClick={() => setshowcategory(!category)}
                          /> 
                    </div>
                    <div className='py-2 space-y-2'>
                        <p className='font-semibold text-sm text-black'>Availabilty</p>
                        <div class="form-check mb-0">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked/>
                          <label class="form-check-label" for="flexCheckDefault">
                            In Stock {"(120)"}
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          <label class="form-check-label" for="flexCheckDefault">
                             Out of Stock {"(5)"}
                          </label>
                        </div>
                    </div> 
                    <div className='py-2 space-y-2'>
                        <p className='font-semibold text-sm text-black'>Price Range</p>
                         <div className='flex '>
                           <div class="input-group w-48 text-xs h-8 flex-nowrap">
                           <span className='flex items-center'>$</span> &nbsp;
                            <input type="text" class="form-control" placeholder="From " aria-label="Username" aria-describedby="addon-wrapping"/>
                            <span className='flex items-center'> To </span>
                            <input type="text" class="form-control" placeholder="From " aria-label="Username" aria-describedby="addon-wrapping"/>
                            </div>
                          </div> 
                    </div> 
                </div>
                <div className='px-2 py-2 bg-white rounded-2xl'>

                </div>
                <div className='px-2 py-2 bg-white rounded-2xl'>

                </div>
            </div>
            <div className='col-span-8 flex flex-col items-center py-2'>
                <div className='w-full px-2 py-2 bg-white rounded-2xl '></div>
            </div>
        </div>
      </main>
    </>
  )
}

export default Ourstore