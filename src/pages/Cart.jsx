import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import photo from "../images/watch2.JPG"

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
                    <h4 className='w-[40%] font-medium tracking-wide'>Product</h4>
                    <h4 className='w-[10%] font-medium tracking-wide'>Price</h4>
                    <h4 className='w-[15%] font-medium tracking-wide'>Qty</h4>
                    <h4 className='w-[10%] font-medium tracking-wide'>Total</h4>
                </div>
                <div className='flex flex-row justify-between py-3 px-2 mt-2 space-y-1'>
                    <div className='w-[40%] flex flex-row'>
                        <img 
                            src={photo}
                            alt="cartproductimage"
                            className='w-[150px] h-[150px] mix-blend-darken'
                        />
                        <div className='flex flex-col py-3'>
                            <p className='text-base font-medium text-gray-500'>Apple Watch ultra</p>
                            <p className='text-base font-medium text-gray-500 mt-2'>Size : <span className=''>128 gb</span></p>
                            <p className='text-base font-medium text-gray-500'>Color : <span className=''>Orange</span></p>
                        </div>

                    </div>
                    <div className='w-[10%] flex mb-5 items-center'>
                         <p className='text-base font-medium text-gray-500'>$ 100</p>
                    </div>
                    <div className='w-[15%] flex mb-5 items-center'>
                            <input 
                                type="number"
                                name=''
                                min={1}
                                max={10}
                                defaultValue={1}
                                className="form-control ring-yellow-500 focus:ring-1 focus:border-none "
                                style={{width : "70px"}}
                                id=""
                            />
                         <p className='text-base font-medium text-gray-500'>$ 100</p>
                    </div>
                    <div className='w-[10%] '>

                    </div>

                </div>
            </div>
      </main>
    </>
  )
}

export default Cart