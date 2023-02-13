import React from 'react'
import { FaRegPaperPlane, FaInstagram, FaFacebookSquare, FaGithub , FaLinkedin } from "react-icons/fa";
import google from "../images/playstore.png"
import apple from "../images/apple.png"


const informationlinks = ["Privacy Policy", "Refund Policy", "Shipping Policy", "Terms & Conditions", "Blogs"]
const Accountlinks = ["Search", "About Us", "FAQ", "Contact", "Size Chart"]
const Quicklinks = ["Accessories", "Laptops", "Smartphones", "Headphones", "Tablets"]

function Footer() {
  return (
    <div className='bg-slate-700  bottom-0 w-[390px]  md:w-full  flex flex-col justify-between'>
        {/* Footer First Section Newsletter */}
        <div className='py-4 px-4 md:!px-16 lg:!px-24 flex flex-col lg:flex-row w-full mx-auto border-b border-gray-400 '>
            <div className='flex space-x-4 py-2 items-center mx-auto'>
                <FaRegPaperPlane className='w-7 h-7 text-white' />
                <p className='text-white text-lg font-semibold font-sans'>Sign Up For Newsletter</p>
            </div>
            <div className='flex flex-1 max-w-2xl flex-row mx-auto items-center'>
            <div class="input-group " >
                    <input 
                        type="text" 
                        class="form-control " 
                        placeholder="Enter your Email" 
                        aria-label="Recipient's username" 
                        aria-describedby="basic-addon2"
                    />
                    <span class="input-group-text" className='bg-yellow-400 rounded-r-md px-3 py-[11px] p-2 font-semibold flex items-center'id="basic-addon2">
                    Subscribe</span>
            </div>
            </div>
            
        </div>
        {/* Footer */}
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 w-full border-b border-gray-400'>
            <div className='flex flex-col py-3 col-span-2 px-2 mx-auto   max-w-[580px]'>
                <p className='font-bold text-lg text-white mb-3 '>Contact US</p>
                <p className='font-normal text-gray-400'>
                    Eshoppers <br/>
                    E15 4AZ Devenoy Road <br/>
                    London <br/>
                    +44 7442005972 <br/>
                    rvishakhs@gmail.com
                </p>
                <div className='flex flex-row  space-x-2 mt-3'>
                    <div className='w-9 h-9 p-1 flex items-center cursor-pointer justify-center bg-gray-500 rounded-full'>
                        <FaInstagram className='w-5 h-5 text-white'/>
                    </div>
                    <div className='w-9 h-9 p-1 flex items-center cursor-pointer justify-center bg-gray-500 rounded-full'>
                        <FaFacebookSquare className='w-5 h-5 text-white'/>
                    </div>
                    <div className='w-9 h-9 p-1 flex items-center cursor-pointer justify-center bg-gray-500 rounded-full'>
                        <FaGithub className='w-5 h-5 text-white'/>
                    </div>
                    <div className='w-9 h-9 p-1 flex items-center cursor-pointer justify-center bg-gray-500 rounded-full'>
                        <FaLinkedin className='w-5 h-5 text-white'/>
                    </div>
                </div>
            </div>
            <div className='flex flex-col py-3 col-span-1 px-4  max-w-[300px]'>
               <p className='font-bold text-lg text-white '>Information Links</p>
                {informationlinks.map((item) => (
                    <div key={item}className='py-2 '>
                        <p className='text-gray-400 font-normal font-sans cursor-pointer'>{item}</p>
                    </div>
                ))}

            </div>
            <div className='flex flex-col py-3 col-span-1 px-4  max-w-[300px]'>
               <p className='font-bold text-lg text-white '>Account</p>
                {Accountlinks.map((item) => (
                    <div key={item}className='py-2 '>
                        <p className='text-gray-400 font-normal font-sans cursor-pointer'>{item}</p>
                    </div>
                ))}

            </div>
            <div className='flex flex-col py-3 col-span-1 px-4  max-w-[300px]'>
               <p className='font-bold text-lg text-white '>Quick Links</p>
                {Quicklinks.map((item) => (
                    <div key={item}className='py-2 '>
                        <p className='text-gray-400 font-normal font-sans cursor-pointer'>{item}</p>
                    </div>
                ))}

            </div>
            <div className='flex flex-col py-3 col-span-2 px-4  max-w-[420px]'>
                <p className='font-bold text-lg text-white '>Our App</p>
                <p className='text-gray-400'>Download our app to get extra 15% Discount on your first order!!</p>
                <div className='flex flex-row mt-2 space-x-2'>
                    <img
                        src={google}
                        className="w-15 h-10 "
                    />
                    <img
                        src={apple}
                        className="w-15 h-10 "
                    />
                </div>
            </div>
            <div></div>
        </div>
        {/* Footer Last session Copyright and payment modes */}
        <div className='w-full text-center py-2'>
            <p className='text-white font-sans '>
                &copy; {new Date().getFullYear()}: Developed and Depolyed by VISAKH SR
            </p>
        </div>
    </div>
  )
}

export default Footer