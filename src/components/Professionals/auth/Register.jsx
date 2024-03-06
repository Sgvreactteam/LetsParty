import React from 'react'
import authBackground from '../../../assets/auth-background.jpeg'
import Logo from '../../../assets/logo.png'
import Button from '../../../ui/Button';
import Input from '../../../ui/Input';
import { Link } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from "yup";
const Register = () => {
    const formik = useFormik({
        initialValues: {
          email: "",
          name: "",
          password: "",
        },
    
        validateOnChange: false,
        validateOnBlur: false,
        validationSchema: Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
    
          name: Yup.string().required("Name  is required"),
          password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters long"),
        }),
    
        onSubmit: (values) => {
          console.log(values);
        },
      });
  return (
    <div className='relative w-full h-[100vh] flex items-center justify-center'>
      <img src={authBackground} className='absolute z-1 w-full h-full object-cover top-0' alt="" />
      <div className='flex flex-col items-center bg-white lg:w-[60%] md:w-[80%] w-[95%] z-10 p-8 rounded-lg opacity-90'>
        <img className='w-[167px]' src={Logo} alt="" />
        <div className="flex flex-col items-center w-[100%] justify-around">
          {/* <input type="text" placeholder='Name' className='border-2 text-[#CACACA] h-[]' /> */}
          <form onSubmit={formik.handleSubmit} className='flex sm:flex-row w-full flex-col flex-wrap justify-around items-center gap-2' action="">
            <Input placeholder="Name" type="text" classes="small"  />
            <Input placeholder="Email Address" type="email" classes="small"  />
            <Input placeholder="Phone Number" type="number" classes="small"  />
            <Input placeholder="Name of Contact" type="text" classes="small"  />
            <Input placeholder="Address" type="text" classes="large" />
            <Button to="/venuesForm" type="purpleButton">Register</Button>
          </form>
          <span className='mt-4'>Already have an account? Login</span>

        </div>
      </div>
    </div>
  )
}

export default Register