import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import Breadcrumb from '../components/Breadcrumb'
import Button from '../components/Button'
import Meta from '../components/Meta'
import Productcard from '../components/Productcard'

function Productpage() {

   const [writereview, setwritereview] = useState(false)

  return (
    <>
      <Meta head="Product | Ecomm"/>
      <Breadcrumb tittle="Store > ProductName" />
      <main className='bg-gray-200 py-4'>
        {/* Product Details */}
        <div className='max-w-7xl mx-auto grid grid-cols-2  md:grid-cols-8 lg:grid-cols-12 '>
            <div className='col-span-6 bg-white py-2 px-2'></div>
            <div className='col-span-6 bg-white py-2 px-2'></div>
        </div>
        {/* Description Section */}
        <div className=' max-w-7xl mx-auto flex bg-white py-2 px-2 w-full mt-4 '>

        </div>
        {/* Review Section */}
        <div className='flex  max-w-7xl mx-auto mt-2  pt-2'>
            <h1 className='font-bold text-xl tracking-wide font-sans  '>Reviews</h1>
        </div>
        <div className=' max-w-7xl mx-auto flex flex-col  bg-white py-2 px-2 w-full mt-2 rounded-lg '>
            <div className='flex flex-row items-center px-4 justify-between w-full'>
                <div className='flex flex-row items-center  space-x-2'>
                    <ReactStars
                        count={5}
                        value={4}
                        size={18}
                        activeColor="#ffd700"
                        edit={false}
                    />
                    <p className='font-normal text-gray-500 text-xs '>Based on 5 Reviews</p>
                </div>
                <div className='flex  '>
                    <a
                        href=''
                        className='hover:underline'
                        
                        onClick={() => setwritereview(!writereview)}
                    >
                        Write review
                    </a>
                </div>
            </div>   
            {writereview && (
                <div className='px-4 mt-2 '>
                <h2 className='font-bold '>Write a review </h2> 
                <form className='px-2 mt-4 space-y-2 flex flex-col '>
                    <div className="form-group px-2">
                      <input 
                        type="text" 
                        className="form-control  focus:ring-1 ring-yellow-500 hover:border-none" 
                        id="Name" 
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="form-group px-2">
                      <input 
                        type="tel" 
                        className="form-control  focus:ring-1 ring-yellow-500 hover:border-none" 
                        id="phoneno" 
                        placeholder="Phone No"
                      />
                    </div>
                    <div className="form-group px-2">
                      <textarea 
                        className="form-control  focus:ring-1 ring-yellow-500 border border-black hover:border-none" 
                        id="exampleFormControlTextarea1" 
                        rows="3"
                        placeholder='Comments'
                      />
                    </div>
                    <div className='px-2 py-2 flex  w-full'>
                      <Button text="Send" />
                    </div>
                  </form>
            </div>
            )}
            
        </div>

        {/* Recommended Products */}
        <div className='flex  max-w-7xl mx-auto mt-2  pt-2'>
            <h1 className='font-bold text-xl tracking-wide font-sans  '>Recommended Products</h1>
        </div>
        <div className='flex rounded-lg max-w-7xl mx-auto mt-3 overflow-x-scroll scrollbar-hide w-full px-4 py-2 bg-white'>
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
        </div>
      </main>
    </>
  )
}

export default Productpage