
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import BlogPostHome from '../components/BlogPostHome';
import blog1 from "../images/blog-1.jpg"
import { useState } from 'react';


function Blogpage() {
    
    const [category, setshowcategory] = useState(true)
  
    return (

    <>
      <Meta head="Blogs | Ecomm"/>
      <Breadcrumb tittle="Blogs > Dynamic Name" />
      <main className='bg-gray-200 py-4'>
        <div className='max-w-7xl mx-auto flex flex-row bg-white rounded-xl'>
             <div className=' px-10 py-5 md:py-10 w-full'>
                <h1 className='font-bold text-2xl tracking-wide leading-10  px-2 md:px-6'>Just The Blog Name </h1>
                  <div className=' flex flex-row my-3 mt-3 justify-between px-2 md:px-4'>
                      <div className='flex gap-3 pl-0 md:pl-6 items-center'>
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
                  <div className='md:!px-8 px-3 my-2 bg-blue-100 py-4 rounded-2xl'>
                    <p className='font-medium text-justify text-base '>The security concerns of a JavaScript sandbox with the Node.js VM module are far from being a recommended approach. We’ve seen how an attacker can provide insecure code that will result in a denial of service attack for a running application. The risks of the insecure JavaScript sandbox extend also to remote code execution.</p>
                  </div>
                 <img  
                    src={blog1}
                    alt='blogimage'
                    className='w-full rounded-xl h-[450px] object-fit'
                 /> 
                 <p className='font-normal text-black text-lg text-justify mt-4 px-2'>The implications of an insecure JavaScript sandbox in a Node.js environment are severe and could bring an entire application to a halt. We’ve seen how an attacker may abuse the JavaScript sandbox and provide harmful input that would degrade a Node.js application — resulting in a denial of service vulnerability. The attack surface didn’t end there. We’ve seen how remote code execution can happen too, which allows attackers to run custom code in Node.js server environments, risking the entire application platform.

                      In fact, the security hole created by a JavaScript sandbox using the Node.js VM module is only the beginning of a more elaborate data breach waiting to happen. Once a single Node.js application server is compromised, it may reveal and expose sensitive information such as access secrets to a database, or cloud services that would allow an attacker to further their exploitation and move laterally within the deployed network.

                    So, the best practice is to not rely on Node.js’ VM module as a secure sandbox to run untrusted JavaScript code. This note is clearly made in the Node.js API documentation, which reads: “The node:vm module is not a security mechanism. Do not use it to run untrusted code.”</p>

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