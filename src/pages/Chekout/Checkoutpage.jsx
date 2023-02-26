import React from 'react'
import {  Select, TextInput } from '@mantine/core';
import { Link } from 'react-router-dom';
import {BiArrowBack} from "react-icons/bi"
import {HiOutlineHome} from "react-icons/hi"
import watch from "../../images/watch2.JPG"


function Checkoutpage() {
  return (
    <>
        <main className='w-full bg-gray-200 h-screen'>
            <div className='max-w-6xl grid grid-cols-2 md:grid-cols-6 lg:grid-cols-10 mx-auto px-2 py-4 bg-gray-200'>
                {/* Left Side */}
                    <div className='grid col-span-6 bg-white px-2 py-3 h-auto rounded-lg divide-x-2'>
                        <div className='flex flex-col px-4'>
                            <div className='flex items-center justify-between'>
                                <h3 className='font-semibold text-3xl px-3 py-4 text-black tracking-wide'>Eshoppers</h3>
                                <Link to="/">
                                    <HiOutlineHome className='w-7 h-6 mr-3 cursor-pointer'/>
                                </Link>
                            </div>
                            <nav className='px-3' style={{}} aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <Link to="/cart">
                                        <li class="breadcrumb-item">Cart</li>
                                    </Link>
                                    <Link to="/shipping">
                                        <li class="breadcrumb-item active"  aria-current="page">Shipping</li>
                                    </Link>
                                    <li class="breadcrumb-item " aria-current="page">Payment</li>
                                </ol>
                                <div className='flex flex-col gap-1 border-b-2 border-gray-200 pb-2'>
                                    <p className='font-normal text-xl mb-2'>Contact Information</p>
                                    <p className='font-normal text-base text-gray-500 '>Visakh SR &nbsp; <span>rvishakhs@gmail.com</span></p>
                                    <div className='flex flex-row gap-1 items-center'>
                                        <input type={'checkbox'} />
                                        <p>email me your new offers and news letters </p>
                                     </div>
                                </div>
                                <div className='flex flex-col gap-2 py-2'>
                                    <h3 className='font-semibold text-xl '>Shipping Address</h3>
                                    <form>
                                    <div className='flex flex-wrap space-x-2 space-y-2'>
                                        <Select
                                            style={{ marginTop: 10, zIndex: 2 }}
                                            data={['United States', 'Canada', 'Australia', 'United Kingdom']}
                                            placeholder="Select one Country"
                                            label="Select country"
                                            className='w-full flex-shrink-0 mx-2 '
                                            />
                                        <TextInput 
                                            label="First Name "
                                            placeholder="First name (Required)"  
                                            className='w-[49%]'    
                                        />    
                                        <TextInput 
                                            label="Last Name "
                                            placeholder="Last name (optional)"  
                                            className='w-[48%]'    
                                        />    
                                        <TextInput 
                                            label="Address"
                                            placeholder="Address line 1 (Required)"  
                                            className='w-full'    
                                        />    
                                        <TextInput 
                                            placeholder="Address line 2 (Required)"  
                                            className='w-full'    
                                        />    
                                        <TextInput 
                                            label="City"
                                            placeholder="City (Required)"  
                                            className='w-[32%]'    
                                        />    
                                        <TextInput 
                                            label="State"
                                            placeholder="State (Required)"  
                                            className='w-[32%]'    
                                        />    
                                        <TextInput 
                                            label="Postcode"
                                            placeholder="Postcode (Required)"  
                                            className='w-[31%]'    
                                        />    
                                    </div>

                                    <div className='flex justify-between items-center mt-3 px-2'>
                                        <div className='flex items-center gap-2'>
                                            <BiArrowBack />
                                            <Link to="/cart">
                                                <p>Return to cart</p>
                                            </Link>
                                        </div>
                                            <button 
                                                type='submit'
                                                className='px-3 text-sm font-medium hover:!border-yellow-500 !border-black py-2 border rounded-xl'
                                            >
                                                Proceed to Payment
                                            </button>
                                    </div>
                                    </form>
                                </div>
                            </nav>   
                        </div>
                    </div>
                {/* Right side  */}
                    <div className='grid col-span-4 '>
                        <div className='flex my-8 flex-col gap-2 px-4 py-4'>
                            <div className='flex flex-col gap-2 border-b border-gray-300 pb-3'>
                                <div className='flex items-center gap-2'>
                                    <div className='w-[75px] rounded-xl h-[75px] flex items-center justify-center bg-white border border-black relative'>
                                        <img 
                                            src={watch}
                                            alt="cartitem"
                                            className='w-[70px] h-[70px] object-contain'
                                        />
                                        <div className='absolute w-5 h-5 rounded-full bg-slate-400 -top-1 -right-1'><span className='text-xs font-medium text-white flex items-center justify-center pt-[2px]'>2</span></div>
                                    </div>
                                    <div className='flex flex-col space-y-1 px-2 w-[60%]'>
                                        <p className='text-Base text-black font-medium'>Apple watch Ultra </p>
                                        <p className='text-base text-gray-500 font-medium'>S : <span>128 Gb</span></p>
                                    </div> 
                                    <div className='flex items-center px-4 '>
                                        <p className='text-Base text-black font-medium'>$100</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <div className='w-[75px] rounded-xl h-[75px] flex items-center justify-center bg-white border border-black relative'>
                                        <img 
                                            src={watch}
                                            alt="cartitem"
                                            className='w-[70px] h-[70px] object-contain'
                                        />
                                        <div className='absolute w-5 h-5 rounded-full bg-slate-400 -top-1 -right-1'><span className='text-xs font-medium text-white flex items-center justify-center pt-[2px]'>2</span></div>
                                    </div>
                                    <div className='flex flex-col space-y-1 px-2 w-[60%]'>
                                        <p className='text-Base text-black font-medium'>Apple watch Ultra </p>
                                        <p className='text-base text-gray-500 font-medium'>S : <span>128 Gb</span></p>
                                    </div> 
                                    <div className='flex items-center px-4 '>
                                        <p className='text-Base text-black font-medium'>$100</p>
                                    </div>
                                </div>

                            </div>
                            <div className='flex flex-col space-y-2 py-2 px-4 border-b border-gray-300 pb-3'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-base font-medium text-gray-500 tracking-wide'>Subtotal</p>
                                    <p className='text-base font-medium text-gray-500 tracking-wide'>$100</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className='text-base font-medium text-gray-500 tracking-wide'>Shipping</p>
                                    <p className='text-base font-medium text-gray-500 tracking-wide'>$19.65</p>
                                </div>
                            </div>
                            <div className='flex flex-col space-y-2 py-2 px-4'>
                                <div className='flex items-center justify-between'>
                                        <p className='text-lg font-medium text-gray-500 tracking-wide'>Total</p>
                                        <p className='text-lg font-medium text-gray-500 tracking-wide'><span className='text-sm'>USD</span>&nbsp;$19.65</p>
                                </div>  
                            </div>
                        </div>
                    </div>
            </div>
        </main>
    </>
  )
}

export default Checkoutpage