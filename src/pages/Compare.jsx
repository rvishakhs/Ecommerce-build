import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import CompareProduct from '../components/CompareProduct '
import Meta from '../components/Meta'

function Compare() {
  return (
    <>
        <Meta head="Compare | Ecomm"/>
        <Breadcrumb tittle="Compare" />
        <main className='bg-gray-200 py-4'>
            <div className='max-w-7xl mx-auto grid overflow-x-scroll scrollbar-hide grid-cols-2  gap-2 md:grid-cols-8 lg:grid-cols-10 '>

                    <CompareProduct />
                    <CompareProduct />
                    <CompareProduct />
                    <CompareProduct />
                    <CompareProduct />

            </div>
        </main>

    </>
  )
}

export default Compare