import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import blog1 from "../images/blog-1.jpg"
import Button from './Button'
import moment from 'moment';

function BlogPostHome({id, tittle,img, desc, date}) {

  let location = useLocation();

  return (
    <div className={`${location.pathname === "/blogs" ? "bg-white col-span-2 md:col-span-3 lg:col-span-5 rounded-2xl pb-3 mx-1 md:mx-0 " : "bg-white w-[350px] md:w-[330px] h-auto pb-2 rounded-2xl"}`}>
        <div className='flex flex-col gap-2'>
            <img 
                src={img? img : blog1}
                alt="blogimage"
                className={`${location.pathname === "/blogs" ? "w-full object-cover rounded-t-2xl" : "w-[350px] md:w-[330px] h-[280px] object-cover rounded-t-2xl" }`}
            />
            <p className='font-medium text-sm text-gray-400 px-3'>{moment(date).format("MMM Do YY")}</p>
            <p className='font-bold text-base text-black px-3'>{tittle}</p>
            <p className='font-medium text-sm pl-4 pr-4'dangerouslySetInnerHTML={{  __html : desc}}></p>
            <div className='px-3'>
              <Link to={`/blogs/${id}`}>
                <Button text="Read More"/>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default BlogPostHome