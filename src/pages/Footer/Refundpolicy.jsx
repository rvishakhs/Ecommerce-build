import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import Meta from '../../components/Meta'

function Refundpolicy() {
  return (
    <>
        <Meta head="Refund Policy"/>
        <Breadcrumb tittle="Refund-policy" />
        <main className='bg-gray-200 py-4'>
            <div className='max-w-7xl space-y-2 bg-white px-12 py-8 flex-col rounded-lg mx-auto flex '>
                <p className='font-semibold text-xl text-black'>Returns Policy</p>
                <p className='font-normal text-base text-black'>Returns is a scheme provided by respective sellers directly under this policy in terms of which the option of exchange, replacement and/ or refund is offered by the respective sellers to you. All products listed under a particular category may not have the same returns policy. For all products, the returns/replacement policy provided on the product page shall prevail over the general returns policy. Do refer the respective item's applicable return/replacement policy on the product page for any exceptions to this returns policy and the table below</p>  
                <p className='font-normal text-base text-black pt-2'> Do read all sections carefully to understand the conditions and cases under which returns will be accepted.</p>  
                <p className='font-normal text-base text-black pt-2'> General Rules for a successful Return</p> 
                <ul className='px-6 space-y-2'>
                  <li className='list-disc'>
                    In certain cases where the seller is unable to process a replacement for any reason whatsoever, a refund will be given.</li>
                  <li className='list-disc'>      
                    In cases where a product accessory is found missing/damaged/defective, the seller may either process a replacement of the particular accessory or issue an eGV for an amount equivalent to the price of the accessory, at the seller’s discretion.
                  </li>
                  <li className='list-disc'>
                    During open box deliveries, while accepting your order, if you received a different or a damaged product, you will be given a refund (on the spot refunds for cash-on-delivery orders). Once you have accepted an open box delivery, no return request will be processed, except for manufacturing defects. In such cases, these category-specific replacement/return general conditions will be applicable. Click here to know more about Open Box Delivery
                  </li>
                  <li className='list-disc'>
                   For products where installation is provided by Eshoppers's service partners, do not open the product packaging by yourself. Eshoppers authorised personnel shall help in unboxing and installation of the product.
                  </li>
                </ul> 

            </div>
        </main>
    </>
  )
}

export default Refundpolicy