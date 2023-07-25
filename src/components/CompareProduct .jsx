import React from 'react'
import watch from "../images/watch2.JPG"
import { AiOutlineClose } from "react-icons/ai";
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtowishlist } from '../features/products/producrtSlice';

function CompareProduct ({id, title, price, category, brand, qty, rating}) {
    const dispatch = useDispatch()

    const addwishlist = (id) => { 
        dispatch(addtowishlist(id))
   }

  return (
    <div className='w-full col-span-1  md:col-span-2 px-2 py-2 bg-white rounded-xl'>
        <div className='flex relative flex-col gap-1'>
            <img 
                src={watch}
                alt="Compare1img"
                className='w-full h-[200px] object-contain'
            />
            <AiOutlineClose 
                className='w-5 h-5 absolute top-2 cursor-pointer  hover:animate-spin right-3' 
                onClick={(e) => addwishlist(id)}
            />  
            <Link to={`/product/${id}`}>
                <p className='font-bold text-base text-black px-2'>{title}</p>
            </Link>
            <div className='divide-y-2'>
                <div className='flex flex-row space-x-4 items-center py-2'>
                    <p className='font-bold text-base text-black px-2'>${price}</p>
                    <ReactStars
                        count={5}
                        value={rating}
                        size={18}
                        activeColor="#ffd700"
                        edit={false}
                        />
                </div>
                <p className='font-semibold text-gray-500 px-2 py-2'>Brand : <span className='px-6 text-black'>{brand}</span></p>
                <p className='font-semibold text-gray-500 px-2 py-2'>Type : <span className='px-6 text-black'>{category}</span></p>
                <p className='font-semibold text-gray-500 px-2 py-2'>Qty Left :<span className='px-6 text-black'>{qty}</span></p>
                <p className='font-semibold text-gray-500 px-2 py-2'>Availability :<span className='px-6 text-black'>In Stock</span></p>
                <p className='font-semibold text-gray-500 px-2 py-2'>Technical Details :<span className='px-6 text-black'></span></p>
            </div>


        </div>
    </div>
  )
}

export default CompareProduct 