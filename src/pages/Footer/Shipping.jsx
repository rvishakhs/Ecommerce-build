import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import Meta from '../../components/Meta'

function Shipping() {
  return (
    <>
        <Meta head="Shipping Policy"/>
        <Breadcrumb tittle="Shipping-policy" />
        <main className='bg-gray-200 py-4'>
            <div className='max-w-7xl space-y-2 bg-white px-12 py-8 flex-col rounded-lg mx-auto flex '>
                <p className='font-semibold text-xl text-black'>Shipping</p>
                <p className='font-medium text-lg text-black'>What are the delivery charges?</p>  
                <p className='font-normal text-base text-black'>Delivery charge varies with each Seller.</p>  
                <p className='font-normal text-base text-black pt-2'>Sellers incur relatively higher shipping costs on low value items. In such cases, charging a nominal delivery charge helps them offset logistics costs. Please check your order summary to understand the delivery charges for individual products.</p>  
                <p className='font-normal text-base text-black pt-2'>For Products listed as Eshoopers Plus, a Rs 40 charge for delivery per item may be applied if the order value is less than Rs 500. While, orders of Rs 500 or above are delivered free.</p>  
                <p className='font-medium text-lg text-black'>I need to return an item, how do I arrange for a pick-up?</p>  
                <p className='font-normal text-base text-black pt-2'>
                  Returns are easy. Contact Us to initiate a return. You will receive a call explaining the process, once you have initiated a return.</p>  
                <p className='font-normal text-base text-black pt-2'>
                Wherever possible Ekart Logistics will facilitate the pick-up of the item. In case, the pick-up cannot be arranged through Ekart, you can return the item through a third-party courier service. Return fees are borne by the Seller.</p>  
                
            </div>
        </main>
    </>
  )
}

export default Shipping