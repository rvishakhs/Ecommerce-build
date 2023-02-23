import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import Meta from '../../components/Meta'

function Privacypolicy() {
  return (
    <>
        <Meta head="Privacy Policy"/>
        <Breadcrumb tittle="Privacy-policy" />
        <main className='bg-gray-200 py-4'>
            <div className='max-w-7xl space-y-2 bg-white px-12 py-8 flex-col rounded-lg mx-auto flex '>
                <p className='font-semibold text-xl text-black'>Safe and Secure Shopping</p>
                <p className='font-medium text-lg text-black'>Is it safe to use my credit/debit card on EShoppers?</p>  
                <p className='font-normal text-base text-black'>Your online transaction on Eshoppers is secure with the highest levels of transaction security currently available on the Internet.  uses 256-bit encryption technology to protect your card information while securely transmitting it to the respective banks for payment processing. All credit card and debit card payments on Eshoppers are processed through secure and trusted payment gateways managed by leading banks. Banks now use the 3D Secure password service for online transactions, providing an additional layer of security through identity verification.</p>  
                <p className='font-medium text-lg text-black'>Does Eshoppers store my credit/debit card infomation?</p>  
                <p className='font-normal text-base text-black'>Eshoppers stores the first 6 and last 4 digits of your card number in a secure and encrypted manner. The first 6 digits (also known as the Bank Identification Number) are used to identify the bank name and country where your card was issued. The first 6 and last 4 digits are together used for fraud detection and prevention purposes.</p>  
                <p className='font-semibold text-xl text-black  pt-2'>Payment Options</p>
                <p className='font-medium text-lg text-black'>What credit/debit cards are accepted on Eshoppers?</p>  
                <p className='font-normal text-base text-black'>We accept VISA, MasterCard, Maestro, Rupay, American Express, Diner's Club and Discover credit/debit cards.</p>  
                <p className='font-medium text-lg text-black'>Privacy Policy</p>  
                <p className='font-normal text-base text-black'>Eshoppers.com respects your privacy and is committed to protecting it. For more details, please see our Privacy Policy</p>  
                <p className='font-medium text-lg text-black'>Contact Us</p>  
                <p className='font-normal text-base text-black'>Couldn't find the information you need? Please Contact Us</p>  
            </div>
        </main>
    </>
  )
}

export default Privacypolicy