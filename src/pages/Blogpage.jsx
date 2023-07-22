
import { useLocation } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import { getAblog } from '../features/blogs/blogSlice';

import blog1 from "../images/blog-1.jpg"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

function Blogpage() {
    
  const dispatch = useDispatch()
  const location = useLocation()

  const getblogid = location.pathname.split("/")[2]
  const blogData = useSelector((state) => state?.blog?.fetchedblog)

  const fetchblogpost = () => {
    dispatch(getAblog(getblogid))
  }

  console.log(blogData);

  useEffect(() => {
    fetchblogpost()
  }, [getblogid])  

    return (

    <>
      <Meta head="Blogs | Ecomm"/>
      <Breadcrumb tittle={`"Blogs > ${blogData?.tittle}`} />
      <main className='bg-gray-200 py-4'>
        <div className='max-w-7xl mx-auto flex flex-row bg-white rounded-xl'>
             <div className=' px-10 py-5 md:py-10 w-full'>
                <h1 className='font-bold text-2xl tracking-wide leading-10  px-2 md:px-6'>{blogData?.tittle} </h1>
                  <div className=' flex flex-row my-3 mt-3 justify-between px-2 md:px-4'>
                      <div className='flex gap-3 pl-0 md:pl-6 items-center'>
                        <img 
                        src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
                        className='w-[35px] h-[35px] object-contain rounded-full'
                        alt='profile pic'
                        />
                        <div className='flex flex-col gap-1 '>
                          <p className='text-sm font-semibold'>{blogData?.Author}</p>
                          <p className='text-xs font-semibold text-gray-500'>{blogData?.category}</p>
                        </div>
                      </div>
                      <div className='flex'>
                          <p className='text-sm font-semibold text-gray-500'>{moment(blogData?.createdAt).format("MMM Do YY")}</p>
                      </div>
                  </div>
                  <div className='md:!px-8 px-3 my-2 bg-blue-100 py-4 rounded-2xl'>
                    <p className='font-medium text-justify text-base 'dangerouslySetInnerHTML={{  __html : blogData?.description}}></p>
                  </div>
                 <img  
                    src={ blogData?.image[0].url || blog1}
                    alt='blogimage'
                    className='w-full rounded-xl h-[450px] object-fit'
                 /> 
                 <p className='font-normal text-black text-lg text-justify mt-4 px-2' dangerouslySetInnerHTML={{  __html : blogData?.description}}></p>

                    <div className='mt-2 px-4 py-4'>
                        <h1 className='font-bold text-2xl  '>Comment Section</h1>
                    </div>
            </div> 
        </div>
      </main>
    </>
  )
}

export default Blogpage