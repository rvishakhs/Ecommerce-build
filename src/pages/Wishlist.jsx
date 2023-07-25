import React, { useEffect } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import CompareProduct from '../components/CompareProduct '
import Meta from '../components/Meta'
import { useDispatch, useSelector } from 'react-redux';
import { getwishlistprod } from '../features/products/producrtSlice';

function Compare() {
      const dispatch = useDispatch()
      const wishlistproducts = useSelector((state) => state?.products?.wishlistProd?.wishlist)

      useEffect(()=> {
        wishlist()
      }, [])

      const wishlist = () => {
        dispatch(getwishlistprod())
      }

  return (
    <>
        <Meta head="Compare | Ecomm"/>
        <Breadcrumb tittle="Compare" />
        <main className='bg-gray-200 py-4'>
            <div className='max-w-7xl mx-auto grid overflow-x-scroll scrollbar-hide grid-cols-2  gap-2 md:grid-cols-8 lg:grid-cols-10 '>
              {wishlistproducts && wishlistproducts?.map((item, index) => {
                return (
                  <CompareProduct 
                    id={item?._id}
                    title={item?.tittle}
                    price={item?.price}
                    category={item?.category}
                    brand={item?.brand}
                    qty={item?.quantity}
                    rating={item?.totalrating}
                    img={item?.image[0].url}
                  />                  
                )               
              })}
            </div>
        </main>

    </>
  )
}

export default Compare