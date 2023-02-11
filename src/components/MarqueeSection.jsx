import React from 'react'
import Marquee from "react-fast-marquee";
import brand1 from "../images/brand-01.png"
import brand2 from "../images/brand-02.png"
import brand3 from "../images/brand-03.png"
import brand4 from "../images/brand-04.png"
import brand5 from "../images/brand-05.png"
import brand6 from "../images/brand-06.png"
import brand7 from "../images/brand-07.png"
import brand8 from "../images/brand-08.png"


function MarqueeSection() {
  return (
    <div className='flex flex-row px-4 py-2 bg-white rounded-2xl'>
        <Marquee>
            <div className='mx-4 w-28'>
                <img 
                    src={brand1}
                    alt="apple"
                />
            </div>
            <div className='mx-4 w-28'>
                <img 
                    src={brand2}
                    alt="Bose"
                />
            </div>
            <div className='mx-4 w-28'>
                <img 
                    src={brand3}
                    alt="canon"
                />
            </div>
            <div className='mx-4 w-28'>
                <img 
                    src={brand4}
                    alt="Dell"
                />
            </div>
            <div className='mx-4 w-28'>
                <img 
                    src={brand5}
                    alt="intel"
                />
            </div>
            <div className='mx-4 w-28'>
                <img 
                    src={brand6}
                    alt="LG"
                />
            </div>
            <div className='mx-4 w-28'>
                <img 
                    src={brand7}
                    alt="samsung"
                />
            </div>
            <div className='mx-4 w-28'>
                <img 
                    src={brand8}
                    alt="Sandisk"
                    className=''
                />
            </div>

        </Marquee>
    </div>
  )
}

export default MarqueeSection