import React from 'react'
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compare from '../images/compare.svg'
import wishlist from '../images/wishlist.svg'
import user from '../images/user.svg' 
import cart from '../images/cart.svg'

function Header() {
  return (
    <div className='w-full'>
        <div className='flex mx-auto flex-row text-sm bg-slate-800 py-2 justify-between px-4 md:px-24 lg:px-32  border-b-2 border-white/70'>
            <div className='flex flex-col md:flex-row space-x-4 justify-between'>
                <p className='text-white font-sans'>This website made only for Educational Purpose, for more information check About tab</p>
            </div>
            <div>
                <a className='text-white font-sans' href='tel:+44 7442005972'><span className='text-white font-sans'>Hotline</span> +44 7442005972</a>
            </div>
        </div>
        <div className='flex mx-auto flex-col space-y-2 md:flex-row items-center justify-between bg-slate-800 py-4 px-3 md:px-12 lg:px-16'>
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
            <div className='md:px-10 px-2 space-x-8 flex flex-row'>
                <div className=' space-x-2 flex items-center'>
                    <img
                        src={compare}
                        alt="compare"
                        className='md:w-8 md:h-8 lg:w-9 lg:h-9 h-5 w-5'
                    />
                    <p className='text-left font-sans text-xs md:text-sm text-white'>Compare<br/>Products</p>
                </div>
                <div className=' space-x-2 flex items-center'>
                    <img
                        src={wishlist}
                        alt="compare"
                        className='md:w-8 md:h-8 lg:w-9 lg:h-9 h-5 w-5'
                    />
                    <p className='text-left font-sans text-xs md:text-sm text-white'>Favourite<br/>Wishlist</p>
                </div>
                <div className=' space-x-2 flex items-center'>
                    <img
                        src={user}
                        alt="compare"
                        className='md:w-8 md:h-8 lg:w-9 lg:h-9 h-5 w-5'
                    />
                    <p className='text-left font-sans text-xs md:text-sm text-white'>Log In<br/>My Account</p>
                </div>
                <div className='flex items-center '>
                    <img
                            src={cart}
                            alt="compare"
                            className='md:w-8 md:h-8 lg:w-9 lg:h-9 h-5 w-5'
                    />
                    <div className='flex flex-col pl-2'>
                        <p className='px-[10px] py-[2px] text-center text-xs font-semibold bg-white/75 rounded-full'>0</p>
                        <p className='text-white pt-1 text-sm'>$ 500</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Header