import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import Breadcrumb from '../components/Breadcrumb'
import Button from '../components/Button'
import Meta from '../components/Meta'
import Productcard from '../components/Productcard'
import Zoom from 'react-img-zoom'
import { AiOutlineZoomIn } from "react-icons/ai";
import apple1 from "../images/ip141.webp"
import apple2 from "../images/ip142.webp"
import apple3 from "../images/ip143.webp"
import apple4 from "../images/ip144.webp"
import apple5 from "../images/ip145.webp"
import apple6 from "../images/ip6.webp"

const images = [apple1,apple2, apple3, apple4, apple5, apple6,]

function Productpage() {

   const [imageindex, setimageindex] = useState(0) 
   const [writereview, setwritereview] = useState(false)

  return (
    <>
      <Meta head="Product | Ecomm"/>
      <Breadcrumb tittle="Store > ProductName" />
      <main className='bg-gray-200 py-4 px-2'>
        {/* Product Details */}
        <div className='max-w-7xl mx-auto grid grid-cols-2  md:grid-cols-8 lg:grid-cols-12 '>
            <div className='col-span-2 flex flex-col md:col-span-4 lg:col-span-6 bg-white py-2 px-2'>
                <div className='border px-2 py-2 border-black relative'>
                    <Zoom
                        img={images[imageindex]}
                        zoomScale={3}
                        width="100%"
                        height={450}
                        className="hover:cursor-move "
                    />
                    <AiOutlineZoomIn className='w-5 h-5 absolute top-2 left-2 text-gray-500'/>    
                </div>
                <div className='flex space-x-2 p-2 overflow-x-scroll scrollbar-hide'>
                    {images.map((image, index) => (
                        <div >
                        <div className='px-2 w-[60px] h-[80px] md:w-[120px] md:h-[120px] py-2 border border-black'>
                            <img
                                src={image}
                                alt="image"
                                className='w-[60px] h-[60px] md:w-[100px] md:h-[100px] object-contain cursor-pointer'
                                onClick={(e) => setimageindex(index)}
                            />
                        </div>
                        </div>
                    ))}
                    
                </div>
            </div>
            {/* <div className='col-span-2 md:col-span-4 lg:col-span-6 bg-white py-2 px-2'></div> */}
        </div>
        {/* Description Section */}
        <div className='flex  max-w-7xl mx-auto mt-2  pt-2'>
            <h1 className='font-bold text-xl tracking-wide font-sans  '>Description</h1>
        </div>
        <div className=' max-w-7xl mx-auto flex bg-white py-2 px-2 w-full mt-2 rounded-lg '>
            <p className='font-sans font-normal text-base px-2 py-2 leading-6 text-justify'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, quasi consequatur eum fugiat quibusdam dolores voluptatum praesentium, accusamus dignissimos, 
                velit dolorem laboriosam amet accusantium alias suscipit illo voluptatibus? Sit, aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ullam 
                perferendis doloremque natus libero aperiam rerum autem voluptate, excepturi expedita repudiandae iure beatae nesciunt blanditiis atque quo maiores reiciendis. Natus.
            </p>
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
                        size={22}
                        activeColor="#ffd700"
                        edit={false}
                    />
                    <p className='font-normal text-gray-500 text-xs '>Based on 5 Reviews</p>
                </div>
                <div className='flex  '>
                        <p
                            className='hover:underline cursor-pointer'
                            onClick={() => setwritereview(!writereview)}
                        >
                        Write review
                        </p>
                    
                </div>
            </div>   
            {writereview && (
                <div className='md:px-4 px-0 mt-2 '>
                <h2 className='font-bold px-4 '>Write a review </h2> 
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
                        type="text" 
                        className="form-control  focus:ring-1 ring-yellow-500 hover:border-none" 
                        id="lastname" 
                        placeholder="Lastname"
                        
                      />
                    </div>
                    <div className='px-2 flex gap-2 items-center'>
                        <ReactStars
                            count={5}
                            value={4}
                            size={22}
                            activeColor="#ffd700"
                            edit={true}
                        />
                        <p className='font-medium text-sm text-gray-500'>Rate your Product</p>
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
                      <Button text="Publish" />
                    </div>
                  </form>
            </div>
            )}
            <div className='flex flex-col w-full px-2 py-2 gap-3 divide-y-2 '>
                <div className='space-y-2'>
                    <div className='flex gap-2 items-center'>
                        <p className='font-bold text-base px-2'> Rahul</p>    
                        <ReactStars
                                count={5}
                                value={4}
                                size={18}
                                activeColor="#ffd700"
                                edit={false}
                                />
                    </div>
                    <p className='px-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eveniet autem ex, quisquam magni iure similique commodi aspernatur, veritatis maxime voluptate inventore nemo quia tempore cum. Doloribus ea dicta nulla.</p>
                </div>
                <div className='space-y-2'>
                    <div className='flex gap-2 items-center'>
                        <p className='font-bold text-base px-2'> Rahul</p>    
                        <ReactStars
                                count={5}
                                value={4}
                                size={18}
                                activeColor="#ffd700"
                                edit={false}
                                />
                    </div>
                    <p className='px-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eveniet autem ex, quisquam magni iure similique commodi aspernatur, veritatis maxime voluptate inventore nemo quia tempore cum. Doloribus ea dicta nulla.</p>
                </div>
                
            </div>
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