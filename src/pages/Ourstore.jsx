import React, { useEffect, useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import RandomProducts from '../components/RandomProducts';
import Productcard from '../components/Productcard';
import { useDispatch, useSelector } from 'react-redux';
import gr from "../images/gr.svg"
import gr1 from "../images/gr2.svg"
import gr2 from "../images/gr3.svg"
import gr3 from "../images/gr4.svg"
import { fetchproducts } from '../features/products/producrtSlice';

function Ourstore() {
  const dispatch = useDispatch()
  const productState = useSelector((state) => state.products.product)
  const [category, setshowcategory] = useState(true)
  const [filter, setfilter] = useState(true)
  const [Producttags, setproductstags] = useState(false)
  const [Randomproducts, setRandomproducts] = useState(true)
  const  [grid, setgrid] = useState(2)
  const colorarry = ["amber", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "white", "yellow"]
  
  const getproducts = () => {
    dispatch(fetchproducts())
  }
  
  useEffect(() => {
    getproducts()
  }, [])
  
  return (

    <>
      <Meta head="Store | Ecomm"/>
      <Breadcrumb tittle="Our store" />
      <main className='bg-gray-200 py-4'>
        <div className='max-w-7xl mx-auto grid grid-cols-2  md:grid-cols-7 lg:grid-cols-11 '>
          {/* Left Section */}
            <div className='col-span-2 gap-2 py-2 px-2 flex  flex-col'>
              {/* Category Section */}
                <div className='px-3 py-2 bg-white rounded-xl  '>
                  <div className='flex justify-between items-center'>
                    <p className='font-bold tracking-wide text-black text-base'>Shop by Category</p>
                     <MdOutlineArrowDropDownCircle 
                        className='w-5 h-5 cursor-pointer'
                        onClick={() => setshowcategory(!category)}
                        /> 
                  </div>
                  {category && (
                  <div className='py-2' >
                    <ul className='px-2 space-y-2'>
                      <li className='font-medium  text-sm cursor-pointer tracking-wide'>Smartphones</li>
                      <li className='font-medium  text-sm cursor-pointer tracking-wide'>Laptops</li>
                      <li className='font-medium  text-sm cursor-pointer tracking-wide'>Camera </li>
                      <li className='font-medium  text-sm cursor-pointer tracking-wide'>Television</li>
                      <li className='font-medium  text-sm cursor-pointer tracking-wide'>Accessories</li>
                    </ul>
                  </div>
                  )}
                </div>
              {/* Filers Section  */}
                <div className='px-3 py-2 bg-white rounded-xl'>
                  <div className='flex justify-between items-center'>
                      <p className='font-bold tracking-wide text-black text-base'>Filter By</p>
                      <MdOutlineArrowDropDownCircle 
                          className='w-5 h-5 cursor-pointer'
                          onClick={() => setfilter(!filter)}
                          /> 
                    </div>
                    {filter && (
                      <>           
                    <div className='py-2 space-y-2'>
                        <p className='font-semibold text-sm text-black'>Availabilty</p>
                        <div class="form-check mb-0">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked/>
                          <label class="form-check-label" for="flexCheckDefault">
                            In Stock {"(120)"}
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          <label class="form-check-label" for="flexCheckDefault">
                             Out of Stock {"(5)"}
                          </label>
                        </div>
                    </div> 
                    <div className='py-2 space-y-2'>
                        <p className='font-semibold text-sm text-black'>Price Range</p>
                         <div className='flex '>
                           <div className="input-group  w-48 text-xs h-8 flex-nowrap">
                           <span className='flex items-center font-bold text-base pr-2'>$</span> &nbsp;
                            <input type="text" className="form-control rounded-sm" placeholder="From " aria-label="From" aria-describedby="addon-wrapping"/>
                            <span className='flex items-center font-bold text-base px-2'>$</span> &nbsp;
                            <input type="text" className="form-control rounded-r-none" placeholder="To" aria-label="To" aria-describedby="addon-wrapping"/>
                            </div>
                          </div> 
                    </div> 
                    <div className='py-2 space-y-2'>
                        <p className='font-semibold text-sm text-black'>Color</p>
                        <div className='flex flex-wrap gap-2 '>
                         {colorarry.map((color) => (
                          <div className={`w-5 h-5 flex-wrap rounded-full border bg-${color}-400`} />
                         ))}
                        </div>
                    </div> 
                    <div className='py-2 space-y-2'>
                        <p className='font-semibold text-sm text-black'>Size </p>
                        <div class="form-check mb-0">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label" for="flexCheckDefault">
                            S {"(23)"}
                          </label>
                        </div>
                        <div class="form-check mb-0">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label" for="flexCheckDefault">
                            M {"(30)"}
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          <label class="form-check-label" for="flexCheckDefault">
                            L {"(20)"}
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          <label class="form-check-label" for="flexCheckDefault">
                            XL {"(15)"}
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          <label class="form-check-label" for="flexCheckDefault">
                            XXL {"(6)"}
                          </label>
                        </div>
                    </div>
                    </>
                )}
                </div>
              {/* Product Tags */}
                <div className='px-3 py-2 bg-white rounded-xl'>
                <div className='flex justify-between items-center'>
                      <p className='font-bold tracking-wide text-black text-base'>Product Tags</p>
                      <MdOutlineArrowDropDownCircle 
                          className='w-5 h-5 cursor-pointer'
                          onClick={() => setproductstags(!Producttags)}
                          /> 
                    </div>
                    {Producttags && (
                      <div className='py-2 flex flex-wrap gap-1'>
                          <p className='px-2 py-1 text-xs font-semibold bg-slate-200 rounded-lg'>Headphones</p>
                          <p className='px-2 py-1 text-xs font-semibold bg-slate-200 rounded-lg'>Phone</p>
                          <p className='px-2 py-1 text-xs font-semibold bg-slate-200 rounded-lg'>Mac</p>
                          <p className='px-2 py-1 text-xs font-semibold bg-slate-200 rounded-lg'>Laptops</p>
                          <p className='px-2 py-1 text-xs font-semibold bg-slate-200 rounded-lg'>Television</p>
                          <p className='px-2 py-1 text-xs font-semibold bg-slate-200 rounded-lg'>Watch</p>
                      </div>    
                    )}

                </div>
              {/* Random Products */}
                <div className='px-3 py-2 bg-white rounded-xl'>
                <div className='flex justify-between items-center'>
                      <p className='font-bold tracking-wide text-black text-base'>Random Products</p>
                      <MdOutlineArrowDropDownCircle 
                          className='w-5 h-5 cursor-pointer'
                          onClick={() => setRandomproducts(!Randomproducts)}
                          /> 
                    </div>
                    {Randomproducts && (
                      <div className='py-2 flex divide-y-2 flex-col'>
                          <RandomProducts />
                          <RandomProducts />
                          <RandomProducts />
                      </div>
                    )}

                </div>
            </div>
          {/* Right Section */}
            <div className='col-span-2 md:col-span-5 mx-1 !md:mx-0 lg:mx-0 lg:col-span-9 flex flex-col items-center py-2'>
              {/* Top bar with sort function */}
                <div className='w-full px-2 flex flex-col gap-2 md:flex-row justify-between py-2 bg-white rounded-xl '>
                  <div className='flex gap-2 items-center px-2'>
                      <p className='font-bold text-sm'>Sort by : </p>
                      <div>
                        <select className="form-select bg-gray-200 border-none " aria-label="Sortby">
                          <option >Best Value Products</option>
                          <option selected value="1">Offer Zone</option>
                          <option value="2">Price High to Low</option>
                          <option value="3">Price Low to high</option>
                        </select>  
                      </div>
                  </div>
                  <div className='flex flex-row gap-2 items-center'>
                    <p className='text-gray-500 text-sm font-medium tracking-wide'>25 Products</p>
                    <div className='flex items-center gap-2 bg-gray-200 py-2 px-2 rounded-lg'>
                      <img 
                          src={gr3}
                          alt="view1"
                          onClick={() => setgrid(2)}
                          className='w-4 h-4 cursor-pointer hover:scale-105 object-contain'
                     />
                      <img 
                          src={gr2}
                          alt="view2"
                          onClick={() => setgrid(3)}
                          className='w-4 h-4 cursor-pointer hover:scale-105 object-contain'
                     />
                      <img 
                          src={gr1}
                          alt="view3"
                          onClick={() => {setgrid(5)}}
                          className='w-4 h-4 cursor-pointer hover:scale-105 object-contain'
                     />
                      <img 
                          src={gr}
                          alt="view4"
                          onClick={() => {setgrid(10)}}
                          className='w-4 h-4 cursor-pointer hover:scale-105 object-contain'
                     />
                     
                    </div>
                  </div>
                </div>
              {/* Products items   */}
                <div className={`grid w-full grid-cols-2 md:grid-cols-6 gap-2 lg:grid-cols-10 flex-wrap`}>
                    <Productcard data={productState? productState : []} grid={grid}  />           
                </div>
            </div>
        </div>
      </main>
    </>
  )
}

export default Ourstore