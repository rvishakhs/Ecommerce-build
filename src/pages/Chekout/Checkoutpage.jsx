import React from 'react'
import { createStyles, Select, TextInput } from '@mantine/core';


function Checkoutpage() {
  return (
    <>
        <main className='w-full bg-gray-200 h-screen'>
            <div className='max-w-6xl grid grid-cols-2 md:grid-cols-6 lg:grid-cols-10 mx-auto px-2 py-4 bg-gray-200'>
                {/* Left Side */}
                    <div className='grid col-span-6 bg-white px-2 py-3 h-auto rounded-lg divide-x-2'>
                        <div className='flex flex-col px-4'>
                            <h3 className='font-semibold text-3xl px-3 py-4 text-black tracking-wide'>Eshoppers</h3>
                            <nav className='px-3' style={{}} aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="/cart">Cart </a></li>
                                    <li class="breadcrumb-item active"  aria-current="page"><a href="/checkout"></a>Shipping</li>
                                    <li class="breadcrumb-item " aria-current="page">Payment</li>
                                </ol>
                                <div className='flex flex-col gap-1 border-b-2 border-gray-200 pb-2'>
                                    <p className='font-normal text-xl mb-2'>Contact Information</p>
                                    <p className='font-normal text-base text-gray-500 '>Visakh SR<br></br> <span>rvishakhs@gmail.com</span></p>
                                    <div className='flex flex-row gap-1 items-center'>
                                        <input type={'checkbox'} />
                                        <p>email me your new offers and news letters </p>
                                     </div>
                                </div>
                                <div className='flex flex-col gap-2 py-2'>
                                    <h3 className='font-semibold text-xl '>Shipping Address</h3>
                                    <Select
                                        style={{ marginTop: 10, zIndex: 2 }}
                                        data={['United States', 'Canada', 'Australia', 'United Kingdom']}
                                        placeholder="Select one Country"
                                        label="Select country"
                                    />
                                    <TextInput 
                                        label="Shipping address" 
                                        placeholder="15329 Huston 21st"  
                                        className='w-[80%]'    
                                    />    
                                    
                                </div>
                            </nav>   
                        </div>
                    </div>
                    <div className='grid col-span-4'></div>
            </div>
        </main>
    </>
  )
}

export default Checkoutpage