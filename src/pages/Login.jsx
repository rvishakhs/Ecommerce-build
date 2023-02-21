import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'

function Login() {
  return (
    <>
      <Meta head="Login | Ecomm"/>
      <Breadcrumb tittle="Login" />
      <main className='bg-gray-200 py-6'>
        <div className='max-w-7xl flex mx-auto justify-center my-auto h-fit '>
            <div className='flex flex-col bg-white px-2 py-2 rounded-lg w-[450px] h-[350px] '>
                <p className='font-bold tracking-wider text-black/80 text-2xl mx-auto py-4'>Login</p>
                <form className='px-4 mt-4 space-y-3'>
                    <div className="form-group px-2 ">
                      <input 
                        type="email" 
                        className="form-control bg-gray-200 py-2 border-none focus:ring-1 ring-yellow-500" 
                        id="Email" 
                        placeholder="Email id"
                      />
                    </div>  
                    <div className="form-group px-2">
                      <input 
                        type="password" 
                        className="form-control bg-gray-200 py-2 border-none focus:ring-1 ring-yellow-500" 
                        id="password" 
                        placeholder="Password"
                      />
                    </div>
                   </form> 
                   <div className='pl-[32px] py-2'>
                      <Link to="/forgetpassword">Forget Password?</Link>
                   </div>
                   <div className='mt-2 py-2 flex px-6  gap-3 justify-center'>
                        <button className='px-4 py-2 bg-black rounded-3xl text-white font-semibold tracking-wide hover:!bg-white hover:!border hover:!border-yellow-500 hover:!text-black '>Login</button>
                        <button className='px-4 py-2 bg-white rounded-3xl text-black border border-black font-semibold tracking-wide hover:border hover:!border-yellow-500'>Sign Up</button>
                   </div>
            </div>
        </div>
      </main>
    </>
  )
}

export default Login