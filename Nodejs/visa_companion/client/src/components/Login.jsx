import React from 'react'
import RegistrationNav from './RegistrationNav'
import { useFormik } from 'formik';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Login() {

    const navigate = useNavigate()
    // fokrmik
const myFormik = useFormik({ //formik
    initialValues: {
        email: "",
        Password: "",
    },
    onSubmit: (formData, { resetForm }) => {
        console.log(formData); // Log the form data or process it
        // Axios.post('http://192.168.1.65:5000/auth/user/signin', {
        Axios.post('http://192.168.1.65:5000/auth/user/signin', {
            email: formData.email,
            Password: formData.Password,
        },
        { withCredentials: true } 
    ).then((output) => {
            console.log(output);
            setTimeout(() => {
                if (output.data.message == "unsuccessful") {
                    alert("Invalid Credentails")
                } else {
                    navigate("/app/home");
                    // console.log('Response:', response.data);
                }
            }, 500)
            // })

        })

    },
})
    
    return (
        <>
            <RegistrationNav />

            <div className='w-full min-h-screen pt-48'>

                <div className='px-8 pt-10 sm:px-40 md:px-44 lg:px-96'>
                    <div className='px-0 lg:px-10' >
                        <div className='h-14 shadow-md my-5 bg-white rounded-lg ' >
                            <input type="email" placeholder='Email' className='input p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-gray-100' name='email'
                                value={myFormik.values.email}
                                onChange={myFormik.handleChange}
                                onBlur={myFormik.handleBlur} />
                        </div>
                        <div className='h-14 shadow-md my-5 bg-white rounded-lg '>
                            <input type="password" placeholder='Password' className='input p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-gray-100' 
                            name='Password'
                            value={myFormik.values.Password}
                            onChange={myFormik.handleChange}
                            onBlur={myFormik.handleBlur}
                            />
                        </div>
                        <div className='h-14 shadow-md my-5 bg-primary text-white text-center py-4 rounded-lg cursor-pointer' onClick={()=>myFormik.handleSubmit()} >
                            Login
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login