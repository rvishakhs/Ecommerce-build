import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Button from '../components/Button'
import Meta from '../components/Meta'
import { GoHome } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephoneForward, BsInfoCircle } from "react-icons/bs";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { enquiry } from '../features/enquiry/enquirySlice';

let contactSchema = Yup.object({
  email: Yup.string().email("Email Id should be valid").required("Email Id is required"),
  tittle: Yup.string().required("First Name is required"),
  mobile: Yup.string().required("Enter a valid Mobile Number"),
  comments: Yup.string().required("Add some comments"),
});

function Contact() {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      tittle : '',
      email: '',
      mobile : '',
      comments: '',
    },
    validationSchema: contactSchema,
    onSubmit: values => {
      dispatch(enquiry(values))
      formik.handleReset()
    },
  })

  return (
    <>
      <Meta head="Contact us"/>
      <Breadcrumb tittle="Contact us" />
      <main className='bg-gray-200 py-4'>
        <div className='max-w-6xl mx-auto flex flex-col px-2' >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19678.80240245193!2d-0.030439703959653366!3d51.54520630087053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a78bf2ab9b87%3A0xbd69d3e95620fb8a!2sStratford%2C%20London!5e0!3m2!1sen!2suk!4v1676843307767!5m2!1sen!2suk" 
              width="full" 
              height="450" 
              title='location'
              className='border-none rounded-lg' 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
            />
            {/* Contact session */}
            <div className='bg-white px-2 py-2 my-3 gap-2 rounded-xl flex flex-col md:flex-row '>
              {/*Left Side */}
              <div className='px-2 py-2 md:w-[50%] w-full'>
                <p className='font-bold text-xl px-4 py-2 text-black tracking-wide'>Contact Me</p>
                  <form onSubmit={formik.handleSubmit} className='px-2 mt-4 space-y-2'>
                    <div className="form-group px-2">
                      <input 
                        type="text" 
                        className="form-control bg-gray-200 w-full flex flex-1" 
                        id="tittle" 
                        placeholder="Full Name"
                        name='tittle' 
                        value={formik.values.tittle}
                        onChange={formik.handleChange("tittle")}
                        onBlur={formik.handleBlur("tittle")}
                      />
                    </div>
                    <div className='error text-red-400 ml-2 text-xs'>
                        {formik.touched.tittle && formik.errors.tittle}
                    </div>
                    <div className="form-group px-2">
                      <input 
                        type="email" 
                        className="form-control bg-gray-200" 
                        id="email" 
                        name='email' 
                        placeholder="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange("email")}
                        onBlur={formik.handleBlur("email")}
                      />
                    </div>
                    <div className='error text-red-400 ml-2 text-xs'>
                        {formik.touched.email && formik.errors.email}
                    </div>
                    <div className="form-group px-2">
                      <input 
                        type="tel" 
                        className="form-control bg-gray-200" 
                        id="mobile" 
                        name='mobile' 
                        placeholder="Mobile No"
                        value={formik.values.mobile}
                        onChange={formik.handleChange("mobile")}
                        onBlur={formik.handleBlur("mobile")}
                      />
                    </div>
                    <div className='error text-red-400 ml-2 text-xs'>
                        {formik.touched.mobile && formik.errors.mobile}
                    </div>
                    <div className="form-group px-2">
                      <textarea 
                        className="form-control bg-gray-200" 
                        id="comments" 
                        rows="3"
                        name='comments' 
                        placeholder="Description"
                        value={formik.values.comments}
                        onChange={formik.handleChange("comments")}
                        onBlur={formik.handleBlur("comments")}
                      />
                    </div>
                    <div className='error text-red-400 ml-2 text-xs'>
                        {formik.touched.comments && formik.errors.comments}
                    </div>
                    <div className='px-2 py-2'>
                      <Button text="Send" />
                    </div>
                  </form>
              </div>
              {/* Right Side */}
              <div className='px-2 py-2 md:w-[50%] w-full'>
                <p className='font-bold text-xl px-4 py-2 text-black tracking-wide'>Get In Touch With Me</p>
                <ul className='space-y-2 mt-4 px-8'>
                  <li 
                    className='flex gap-2 items-center font-medium text-gray-500'>
                      <GoHome className='w-5 h-5 text-black' />
                      63, Devonay Rd,  Startford, London
                  </li>
                  <li 
                    className='flex gap-2 items-center font-medium text-gray-500'>
                      <HiOutlineMail className='w-5 h-5 text-black' />
                      Rvishakhs@gmail.com
                  </li>
                  <li 
                    className='flex gap-2 items-center font-medium text-gray-500'>
                      <BsTelephoneForward className='w-5 h-5 text-black' />
                      07442005972
                  </li>
                  <li 
                    className='flex gap-2 items-center font-medium text-gray-500'>
                      <BsInfoCircle className='w-5 h-5 text-black' />
                      <a href='visakhsr.com'>www.visakhsr.com</a>
                  </li>

                </ul>
                
              </div>
            </div>
        
        </div>

      </main>
    </>
  )
}

export default Contact