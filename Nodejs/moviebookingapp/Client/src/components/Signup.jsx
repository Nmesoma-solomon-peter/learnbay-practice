import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as myYup from "yup"
import Axios from "axios"
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();
    const [signupStatus, setSignupStatus] = useState(""); //useState to hold the signup status

    const myFormik = useFormik({ //formik
        initialValues: {
            username: "",
            Email: "",
            Password: "",
            cPassword: "",
        },
        onSubmit: (formData, { resetForm }) => {
            // console.log(formData); // Log the form data or process it
            Axios.post('http://localhost:5000/user/signup', {
                username: formData.username,
                email: formData.Email,
                password: formData.Password,
                cPassword: formData.cPassword
            }).then((output) => {

                // setTimeout(() => {
                    setSignupStatus(output.data.message);
                    if (output.data.message == "Email Exist") {
                        alert("Email already Exist")
                    }else{
                        navigate("/signin")
                        // resetForm(); // Reset the form fields
                        alert("Form submitted successfully!"); // Inform the user
                        // console.log('Response:', response.data);
                    }
                // }, 500)
            })
        },
        validationSchema: myYup.object().shape({//Yup validation
            username: myYup.string().required("username is required"),
            Email: myYup.string().required("Email is required")
                .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "invalid email format"),
            Password: myYup.string()
                .required("Password is required")
                .matches(
                    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                    "Password must be at least 8 characters long, include one letter and one number, and may contain special characters."
                ),
            cPassword: myYup.string()
                .required("Confirm password is required")
                .oneOf([myYup.ref("Password")], "Passwords must match"),
        })
    })
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-200">
            <div
                className="bg-white rounded-lg shadow-md p-8 w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                    Sign up
                </h2>

                <form method='Post' onSubmit={myFormik.handleSubmit}>
                    {/* Username */}
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={myFormik.values.username}
                            onChange={myFormik.handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
                            placeholder="Enter your username"
                        />
                        {myFormik.touched.username && myFormik.errors.username ? <p className="text-red-600"> {myFormik.errors.username}</p> : null}
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="Email"
                            id="email"
                            value={myFormik.values.Email}
                            onChange={myFormik.handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
                            placeholder="Enter your email"
                        />
                        {myFormik.touched.Email && myFormik.errors.Email ? <p className="text-red-600"> {myFormik.errors.Email}</p> : null}
                    </div>

                    {/* Password */}
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="Password"
                            id="password"
                            value={myFormik.values.Password}
                            onChange={myFormik.handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
                            placeholder="Enter your password"
                        />
                        {myFormik.touched.Password && myFormik.errors.Password ? <p className="text-red-600"> {myFormik.errors.Password}</p> : null}
                    </div>
                    {/*Confirm Password */}
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="cPassword"
                            id="cpassword"
                            value={myFormik.values.cPassword}
                            onChange={myFormik.handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
                            placeholder="Enter your password"
                        />
                        {myFormik.touched.cPassword && myFormik.errors.cPassword ? <p className="text-red-600"> {myFormik.errors.cPassword}</p> : null}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"

                    >
                        Submit
                    </button>
                </form>

            </div>
        </div>
    );
}

export default Signup;
