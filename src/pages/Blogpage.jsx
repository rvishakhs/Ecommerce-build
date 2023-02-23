
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import BlogPostHome from '../components/BlogPostHome';
import { useState } from 'react';


function Blogpage() {
    
    const [category, setshowcategory] = useState(true)
  
    return (

    <>
      <Meta head="Blogs | Ecomm"/>
      <Breadcrumb tittle="Blogs > Dynamic Name" />
      <main className='bg-gray-200 py-4'>
        <div className='max-w-7xl mx-auto flex flex-row bg-white rounded-xl'>
             <div className='px-10 py-10 w-full'>
                <h1 className='font-bold text-2xl tracking-wide leading-10  px-6'>Just The Blog Name </h1>
                  <div className=' flex flex-row my-3 mt-3 justify-between px-4'>
                      <div className='flex gap-3 pl-6 items-center'>
                        <img 
                        src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
                        className='w-[35px] h-[35px] object-contain rounded-full'
                        alt='profile pic'
                        />
                        <div className='flex flex-col gap-1 '>
                          <p className='text-sm font-semibold'>Author Name</p>
                          <p className='text-xs font-semibold text-gray-500'>Category</p>
                        </div>
                      </div>
                      <div className='flex'>
                          <p className='text-sm font-semibold text-gray-500'>19/August/2019</p>
                      </div>
                  </div>
                  <div className='px-8 my-2 bg-gray-100 py-4 rounded-2xl'>
                    <p className='font-medium text-justify text-base '>The security concerns of a JavaScript sandbox with the Node.js VM module are far from being a recommended approach. We’ve seen how an attacker can provide insecure code that will result in a denial of service attack for a running application. The risks of the insecure JavaScript sandbox extend also to remote code execution.</p>
                  </div>
            </div> 
        </div>
      </main>
    </>
  )
}

export default Blogpage