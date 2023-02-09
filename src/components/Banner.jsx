import React from 'react'
import main1 from "../images/main-banner.jpg"
import subimg1 from "../images/catbanner-01.jpg"
import subimg2 from "../images/catbanner-02.jpg"
import subimg3 from "../images/catbanner-03.jpg"
import subimg4 from "../images/catbanner-04.jpg"

function Banner() {
  return (
    <div className='grid grid-cols-4 px-4 py-4 gap-2'>
        <div className='col-span-2'>
            <img 
                src={main1}
                className="w-[620px] h-[425px] rounded-xl object-cover"
            />
        </div>
        <div className=' flex col-span-2 flex-wrap gap-4'>
            <div className='grid space-x-2' >
                <img 
                    src={subimg1}
                    className="w-[300px] h-[200px] rounded-xl object-cover"
                />
            </div>
            <div className='grid' >
                <img 
                    src={subimg2}
                    className="w-[300px] h-[200px] rounded-xl object-cover"
                />
            </div>
            <div className='grid' >
                <img 
                    src={subimg3}
                    className="w-[300px] h-[200px] rounded-xl object-cover"
                />
            </div>
            <div className='grid' >
                <img 
                    src={subimg4}
                    className="w-[300px] h-[200px] rounded-xl object-cover"
                />
            </div>
        </div>
    </div>
  )
}

export default Banner