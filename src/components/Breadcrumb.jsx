import React from 'react'
import { Link } from 'react-router-dom'
import { SlHome } from "react-icons/sl";

function Breadcrumb({tittle}) {
  return (
    <div className='py-2 px-4 flex gap-2 items-center'>
        <SlHome className="w-4 h-4 text-gray-500" />
        <p className='font-medium text-sm text-gray-500'>
            <Link to="/">Home {'>'} </Link> {tittle}
        </p>
    </div>
  )
}

export default Breadcrumb