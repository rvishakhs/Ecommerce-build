import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'

function Forget() {
  return (
    <>
      <Meta head="Rest password"/>
      <Breadcrumb tittle="Reset-password" />
      <main className='bg-gray-200 py-6'>
        <div className='max-w-7xl flex mx-auto justify-center my-auto h-fit '>
            <div className='flex flex-col bg-white px-2 py-2 rounded-lg w-[450px] h-[330px] my-3 '>
                <p className='font-bold tracking-wider text-black/80 text-2xl mx-auto py-4'>Reset Your Password</p>
                <p className='font-medium tracking-normal text-gray-500 text-sm mx-auto '>We will send you an email to reset your password</p>
                <form className='px-4 mt-4 space-y-3'>
                    <div className="form-group px-2 ">
                      <input 
                        type="email" 
                        className="form-control bg-gray-200 py-2 border-none focus:ring-1 ring-yellow-500" 
                        id="Email" 
                        placeholder="Email id"
                      />
                    </div>  
                    
                   </form> 

                   <div className='mt-4 py-2 flex  px-6  gap-3 justify-center'>
                        <button className='px-4 py-2 bg-black rounded-3xl text-white font-semibold tracking-wide hover:!bg-white hover:!border hover:!border-yellow-500 hover:!text-black '>Submit</button>
                   </div>
                   <div className=' flex px-2 gap-3 justify-center'>
                    <Link to="/login">
                        <button className='py-2 font-medium text-black tracking-wide hover:underline leading-6'>
                          Cancel
                        </button>
                    </Link>
                   </div>
            </div>
        </div>
      </main>
    </>
  )
}

export default Forget