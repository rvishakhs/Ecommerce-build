import React from 'react'
import Banner from '../components/Banner'
import Service from '../components/Service'

function Home() {
  return (
    <div className='w-full h-full'>
        <div className='max-w-[1350px] mx-auto my-4'>
            <Banner />
        </div>
        <div className='w-full bg-gray-200 mx-auto h-screen'>
            <div className='max-w-[1350px] mx-auto my-4'>
                <Service />
            </div>
        </div>
    </div>
  )
}

export default Home