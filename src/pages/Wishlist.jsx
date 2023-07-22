import React, { useEffect } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import CompareProduct from '../components/CompareProduct '
import Meta from '../components/Meta'
import { useDispatch, useSelector } from 'react-redux';
import { getwishlistprod } from '../features/products/producrtSlice';

function Compare() {
      const dispatch = useDispatch()
      const wishlistproducts = useSelector(getwishlistprod)

      useEffect(()=> {
        wishlist()
      }, [])

      const wishlist = () => {
        dispatch(getwishlistprod)
      }

      console.log(wishlistproducts);
  return (
    <>
        <Meta head="Compare | Ecomm"/>
        <Breadcrumb tittle="Compare" />
        <main className='bg-gray-200 py-4'>
            <div className='max-w-7xl mx-auto grid overflow-x-scroll scrollbar-hide grid-cols-2  gap-2 md:grid-cols-8 lg:grid-cols-10 '>
                    <CompareProduct />
            </div>
        </main>

    </>
  )
}

export default Compare