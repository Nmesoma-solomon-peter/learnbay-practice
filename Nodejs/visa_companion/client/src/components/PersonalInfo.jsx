import React from 'react';
// import { visaTypes, countries, ApplicationStatus, languages, immigrationExperience } from './RegistrationArray';

function PersonalInfo(props) {
    return (
        <>
            {/* Personal Info Section */}
            <div className="px-8 pt-10 sm:px-40 md:px-44 lg:px-96">
                <div className="px-0 lg:px-10">
                    <h2 className="font-bold text-lg">Personal Information</h2>

                    {/* Full Name */}
                    <div className="h-14 shadow-md my-5 bg-white rounded-lg">
                        <input
                            type="text"
                            placeholder="Full Name (*required)"
                            className="input p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-gray-100"
                            name="fullName"
                            value={props.myFormik.values.fullName}
                            onChange={props.myFormik.handleChange}
                            onBlur={props.myFormik.handleBlur}
                        />
                    </div>
                    {props.myFormik.touched.fullName && props.myFormik.errors.fullName ? (
                        <div className="text-red-600 text-xs">{props.myFormik.errors.fullName}</div>
                    ) : null}

                    {/* Email */}
                    <div className="h-14 shadow-md my-5 bg-white rounded-lg">
                        <input
                            type="email"
                            placeholder="Email (*required)"
                            className="input p-3 border-2  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-gray-100"
                            name="email"
                            value={props.myFormik.values.email}
                            onChange={props.myFormik.handleChange}
                            onBlur={props.myFormik.handleBlur}
                        />
                    </div>
                    {props.myFormik.touched.email && props.myFormik.errors.email ? (
                        <div className="text-red-600 text-xs">{props.myFormik.errors.email}</div>
                    ) : null}

                    {/* Password */}
                    <div className="h-14 shadow-md my-5 bg-white rounded-lg">
                        <input
                            type="password"
                            placeholder="Password (*required)"
                            className="input p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-gray-100"
                            name="Password"
                            value={props.myFormik.values.Password}
                            onChange={props.myFormik.handleChange}
                            onBlur={props.myFormik.handleBlur}
                        />
                    </div>
                    {props.myFormik.touched.Password && props.myFormik.errors.Password ? (
                        <div className="text-red-600 text-xs">{props.myFormik.errors.Password}</div>
                    ) : null}

                    {/* Confirm Password */}
                    <div className="h-14 shadow-md my-5 bg-white rounded-lg">
                        <input
                            type="password"
                            placeholder="Confirm Password (*required)"
                            className="input p-3 border-2 z-0 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-gray-100"
                            name="cPassword"
                            value={props.myFormik.values.cPassword}
                            onChange={props.myFormik.handleChange}
                            onBlur={props.myFormik.handleBlur}
                        />
                    </div>
                    {props.myFormik.touched.cPassword && props.myFormik.errors.cPassword ? (
                        <div className="text-red-600 text-xs z-40">{props.myFormik.errors.cPassword}</div>
                    ) : null}

                    {/* Phone Number */}
                    <div className="h-14 shadow-md my-5 bg-white rounded-lg">
                        <input
                            type="text"
                            placeholder="Phone Number (optional)"
                            className="input p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-gray-100"
                            name="number"
                            value={props.myFormik.values.number}
                            onChange={props.myFormik.handleChange}
                        />
                    </div>

                    {/* Profile Picture Upload */}
                    <label className="block text-sm font-medium text-gray-700">
                        Profile Picture (optional)
                    </label>
                    <div className="h-14 shadow-md my-5 bg-white rounded-lg">
                        <input
                            type="file"
                            accept="image/*"
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-gray-100"
                            
                            // value={props.myFormik.values.profilePix}
                            // onChange={props.myFormik.handleChange}
                            onChange={(event) => {
                                // const file = event.currentTarget.files[0];
                                const file = event.target.files[0];
                                props.myFormik.setFieldValue("profilePix", file); // Update Formik value

                                // const reader = new FileReader();
                    
                                // if (file) {
                                //     reader.onloadend = () => {
                                //         props.myFormik.setFieldValue("profilePix", reader.result); // Update Formik value
                                //     };
                                //     reader.readAsDataURL(file); // Read the file as a Data URL
                                // }
                            }}  
                              name="profilePix"                 
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default PersonalInfo;
