import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import photo from "../images/watch2.JPG"
import { FiTrash } from "react-icons/fi";
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <>
      <Meta head="Cart | Ecomm"/>
      <Breadcrumb tittle="Store > Cart" />
      <main className='bg-gray-200 py-3 px-2'>
            <div className='max-w-7xl mx-auto py-4'>
                <p className='px-4 py-2 font-bold text-2xl text-black'>
                    Your Shopping Bag
                </p>
                <div className=' border-b-2 flex flex-row justify-between border-t-2 py-3 px-2 mt-2  border-gray-300'>
                    <h4 className='w-[50%] md:w-[40%]  font-medium tracking-wide'>Product</h4>
                    <h4 className='w-[10%] font-medium tracking-wide'>Price</h4>
                    <h4 className='w-[15%] font-medium tracking-wide'>Qty</h4>
                    <h4 className='w-[10%] font-medium tracking-wide'>Total</h4>
                </div>
                <div className='flex flex-row justify-between py-3 border-b-2 border-gray-300 px-2 mt-2 space-y-1'>
                    <div className='w-[50%] md:w-[40%] flex flex-row items-center'>
                        <img 
                            src={photo}

                            alt="cartproductimage"
                            className='w-[100px] h-[100px] md:w-[150px] md:h-[150px] mix-blend-darken'
                        />
                        <div className='flex flex-col py-3'>
                            <p className='text-sm md:text-base font-medium text-gray-500'>Apple Watch ultra</p>
                            <p className='text-sm md:text-base font-medium text-gray-500 mt-2'>Size : <span className=''>128 gb</span></p>
                            <p className='text-sm md:text-base font-medium text-gray-500'>Color : <span className=''>Orange</span></p>
                        </div>

                    </div>
                    <div className='w-[10%] flex mb-5 items-center'>
                         <p className=' font-medium text-gray-500 text-sm md:text-lg'>$ 100</p>
                    </div>
                    <div className='w-[15%] flex flex-col md:flex-row mb-5 gap-2 items-center justify-center'>
                            <input 
                                type="number"
                                name=''
                                min={1}
                                max={10}
                                defaultValue={1}
                                className="form-control ring-yellow-500 focus:ring-1 bg-gray-300 focus:border-none "
                                style={{width : "60px"}}
                                id=""
                            />
                            <FiTrash className='w-5 h-5 hover:scale-105 cursor-pointer'/>
                    </div>
                    <div className='w-[10%] flex mb-5 items-center'>
                        <p className=' font-medium text-gray-500 text-sm md:text-lg'>$ 100</p>
                    </div>

                </div>
                <div className='flex flex-row justify-between py-3 px-2'>
                        <div className='flex flex-col w-[40%]'>
                            <Link to="/store">
                                <Button text="Countinue Shopping"/>
                            </Link>
                            <div className="form-group px-2 mt-3">
                                <textarea 
                                    className="form-control border border-black bg-gray-200" 
                                    id="Morecomments" 
                                    rows="3"
                                    placeholder='Order Instrutions'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col mr-4 text-end gap-2'>
                            <p className='font-bold text-2xl text-gray-500'>Sub Total : <span>$100</span></p>
                            <p className='font-semibold text-xl text-gray-500'>Taxes and shipping calculated at checkout</p>
                            <div className='flex justify-end'>
                                <Link to="/checkout">
                                    <Button text="Checkout"/>
                                </Link>
                            </div>
                        </div>
                </div>
            </div>
      </main>
    </>
  )
}

export default Cart