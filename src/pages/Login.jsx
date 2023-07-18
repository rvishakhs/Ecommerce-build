import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { loginuser } from '../features/user/userSlice';

let loginSchema = Yup.object({
  email: Yup.string().email("Email Id should be valid").required("Email Id is required"),
  password: Yup.string().required("Password Required"),
});

function Login() {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: '',
      password : '',
    },
    validationSchema: loginSchema,
    onSubmit: values => {
      alert(JSON.stringify(values));
      dispatch(loginuser(values));
      formik.handleReset()
    },
  })

  return (
    <>
      <Meta head="Login | Ecomm"/>
      <Breadcrumb tittle="Login" />
      <main className='bg-gray-200 py-6'>
        <div className='max-w-7xl flex mx-auto justify-center my-auto h-fit '>
            <div className='flex flex-col bg-white px-2 py-2 rounded-lg w-[450px] h-auto '>
                <p className='font-bold tracking-wider text-black/80 text-2xl mx-auto py-4'>Login</p>
                <form onSubmit={formik.handleSubmit} className='px-4 mt-4 space-y-3'>
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
                   <div className='pl-[15px] py-1 text-gray-400 hover:text-black text-sm font-medium'>
                      <Link to="/resetpassword">Forget Password ?</Link>
                   </div>
                   <div className='mt-2 py-2 flex px-6  gap-3 justify-center'>
                        <button type="submit" className='px-4 py-2 bg-black rounded-3xl text-white font-semibold tracking-wide hover:!bg-white hover:!border hover:!border-yellow-500 hover:!text-black '>Login</button>
                        <Link to="/signup">
                            <button className='px-4 py-2 bg-white rounded-3xl text-black border border-black font-semibold tracking-wide hover:border hover:!border-yellow-500'>Sign Up</button>
                        </Link>
                   </div>
                   </form> 
            </div>
        </div>
      </main>
    </>
  )
}

export default Login