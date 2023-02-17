import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'

function Ourstore() {
  return (
    <>
      <Meta head="Store | Ecomm"/>
      <Breadcrumb tittle="Our store" />
      <div className='max-w-7xl grid grid-cols-2 md:grid-cols-7 lg:grid-cols-10 '>
          <div className='col-span-2'></div>
          <div className='col-span-7'></div>
      </div>
    </>
  )
}

export default Ourstore