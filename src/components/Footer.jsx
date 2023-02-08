import React from 'react'
import { FaRegPaperPlane } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-slate-700 fixed bottom-0 w-full  flex flex-col justify-between'>
        {/* Footer First Section Newsletter */}
        <div className='py-3 px-4 md:!px-16 lg:!px-24 flex w-full mx-auto border-b border-gray-400 '>
            <div className='flex space-x-4 items-center mx-auto'>
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
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 w-full'>
            <div className='flex flex-col py-3 col-span-2  max-w-[300px]'>
                <p className='font-bold text-lg text-white '>Contact US</p>
                <p className='font-normal text-white'>
                    Eshoppers <br/>
                    E15 4AZ Devenoy Road <br/>
                    London <br/>
                    +44 7442005972 <br/>
                    rvishakhs@gmail.com
                </p>
                <div className='flex flex-row space-x-2'>
                    <div className='w-4 h-4 p-2 bg-gray-500 rounded-full'>
                        
                    </div>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
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