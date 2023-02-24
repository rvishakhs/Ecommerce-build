import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'

function Productpage() {
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
        <div className=' max-w-7xl mx-auto flex bg-white py-2 px-2 w-full mt-4 '>

        </div>
      </main>
    </>
  )
}

export default Productpage