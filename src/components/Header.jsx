import React from 'react'
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
function Header() {
  return (
    <div className='w-full'>
        <div className='flex mx-auto flex-row bg-slate-700 py-2 justify-between md:px-24 lg:px-32 px-8 border-b-2 border-white/70'>
            <div className='flex flex-col md:flex-row space-x-4 justify-between'>
                <p className='text-white font-sans'>This website made only for Educational Purpose, for more information check About tab</p>
            </div>
            <div>
                <a className='text-white font-sans' href='tel:+44 7442005972'><span className='text-white font-sans'>Hotline</span> +44 7442005972</a>
            </div>
        </div>
        <div className='flex mx-auto  flex-row items-center bg-slate-700 py-4 px-6 md:px-12'>
            <div className='px-4 flex items-center '>
                <Link to="/" className='text-white text-2xl'>
                    <span className='text-white font-sans text-4xl font-bold'>E</span>shoppers
                </Link>
            </div>
            <div className='flex flex-1 max-w-2xl flex-row items-center '>
                <div class="input-group " >
                    <input 
                        type="text" 
                        class="form-control " 
                        placeholder="Search Products" 
                        aria-label="Recipient's username" 
                        aria-describedby="basic-addon2"
                    />
                    <span class="input-group-text" className='bg-yellow-400 rounded-r-md px-3 py-[11px] p-2 flex items-center'id="basic-addon2">
                    <BsSearch /></span>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Header