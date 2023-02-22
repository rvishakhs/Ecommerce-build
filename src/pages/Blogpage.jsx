
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import BlogPostHome from '../components/BlogPostHome';
import { useState } from 'react';


function Blogs() {
    
    const [category, setshowcategory] = useState(true)
  
    return (

    <>
      <Meta head="Blogs | Ecomm"/>
      <Breadcrumb tittle="Blogs" />
      <main className='bg-gray-200 py-4'>
        <div className='max-w-7xl mx-auto grid grid-cols-2  md:grid-cols-7 lg:grid-cols-11 '>
            <h3>Just The Blog Name </h3>
        </div>
      </main>
    </>
  )
}

export default Blogs