import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { registeruser } from '../features/user/userSlice';

let signupSchema = Yup.object({
  firstname: Yup.string().required("Please enter your first name"),
  lastname: Yup.string().required("Please enter your lastname"),
  email: Yup.string().email("Email Id should be valid"),
  mobile: Yup.string().required("Please enter your mobile "),
  // password: Yup.string().password("Please enter your password"), 
});

function Signup() {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      mobile : '',
      password : '',
    },
    validationSchema: signupSchema,
    onSubmit: values => {
      dispatch(registeruser(values))
      formik.handleReset()
    },
  })
  return (
    <>
      <Meta head="Sign up | Ecomm"/>
      <Breadcrumb tittle="Sign up" />
      <main className='bg-gray-200 py-6'>
        <div className='max-w-7xl flex mx-auto justify-center my-auto h-fit '>
            <div className='flex flex-col bg-white px-2 py-2 rounded-lg w-[450px] h-auto '>
                <p className='font-bold tracking-wider text-black/80 text-2xl mx-auto py-3'>Sign up</p>
                <form className='px-4 mt-4 space-y-3' onSubmit={formik.handleSubmit}>
                   <div className="form-group px-2 ">
                        <input 
                          type="text" 
                          className="form-control bg-gray-200 py-2 border-none focus:ring-1 ring-yellow-500" 
                          id="firstname" 
                          name='firstname' 
                          placeholder="First Name"
                          value={formik.values.firstname}
                          onChange={formik.handleChange("firstname")}
                          onBlur={formik.handleBlur("firstname")} 
                        />
                    </div>
                    <div className='error text-red-400 ml-2 text-xs'>
                        {formik.touched.firstname && formik.errors.firstname}
                    </div>
                   <div className="form-group px-2 ">
                        <input 
                          type="text" 
                          className="form-control bg-gray-200 py-2 border-none focus:ring-1 ring-yellow-500" 
                          id="lastname" 
                          name='lastname' 
                          placeholder="Last Name"
                          value={formik.values.lastname}
                          onChange={formik.handleChange("lastname")}
                          onBlur={formik.handleBlur("lastname")} 
                        />
                    </div>
                    <div className='error text-red-400 ml-2 text-xs'>
                        {formik.touched.lastname && formik.errors.lastname}
                    </div>
                    <div className="form-group px-2 ">
                      <input 
                        type="email" 
                        className="form-control bg-gray-200 py-2 border-none focus:ring-1 ring-yellow-500" 
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
                    <div className="form-group px-2 ">
                      <input 
                        type="text" 
                        className="form-control bg-gray-200 py-2 border-none focus:ring-1 ring-yellow-500" 
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
                      <input 
                        type="password" 
                        className="form-control bg-gray-200 py-2 border-none focus:ring-1 ring-yellow-500" 
                        id="password" 
                        name='password' 
                        placeholder="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange("password")}
                        onBlur={formik.handleBlur("password")} 
                      />
                    </div>
                    <div className='error text-red-400 ml-2 text-xs'>
                        {formik.touched.password && formik.errors.password}
                    </div>
                   <div className='mt-3 py-2 flex px-6  gap-3 justify-center'>
                        <button type="submit" className='px-4 py-2 bg-black rounded-3xl text-white font-semibold tracking-wide hover:!bg-white hover:!border hover:!border-yellow-500 hover:!text-black '>Create Account</button>
                   </div>
                   </form> 
            </div>
        </div>
      </main>
    </>
  )
}

export default Signup