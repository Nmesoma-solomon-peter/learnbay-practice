import React, { useState } from 'react'
import RegistrationForm from './RegistrationForm'
import RegistrationNav from './RegistrationNav'
import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as myYup from "yup"
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate()
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState("33%")

    // Update progress whenever `step` changes
    useEffect(() => {
        if (step === 1) setProgress("33%");
        else if (step === 2) setProgress("67%");
        else if (step === 3) setProgress("100%");
    }, [step]);



    // yup and formik for validation
    const myFormik = useFormik({ //formik
        initialValues: {
            fullName: "",
            email: "",
            Password: "",
            cPassword: "",
            number: "",
            profilePix: "",
            visaType: "",
            destination: '',
            applicationStatus: '',
            nationality: "",
            currentCountry: '',
            languages: '',
            immigrationExperience: '',
        },
        onSubmit: (formData, { resetForm }) => {
            console.log(formData); // Log the form data or process it
            Axios.post('http://192.168.1.65:5000/auth/user/signup', {
                fullName: formData.fullName,
                email: formData.email,
                Password: formData.Password,
                cPassword: formData.cPassword,
                number: formData.number,
                profilePix: formData.profilePix,
                visaType: formData.visaType,
                destination: formData.destination,
                applicationStatus: formData.applicationStatus,
                nationality: formData.nationality,
                currentCountry: formData.currentCountry,
                languages: formData.languages,
                immigrationExperience: formData.immigrationExperience,
            },{
                headers: { 'Content-Type': 'multipart/form-data' },
              }).then((output) => {
                console.log(output);
                setTimeout(() => {
                if (output.data.message == "Email Exist") {
                    alert("Email already Exist")
                } else {
                    alert("Successfully registered"); // Inform the user
                    resetForm(); // Reset the form fields
                    navigate("/login");
                    // console.log('Response:', response.data);
                }
                }, 500)
                // })

            })

            //     // setTimeout(() => {
            //         setSignupStatus(output.data.message);
            //         if (output.data.message == "Email Exist") {
            //             alert("Email already Exist")
            //         }else{
            //             navigate("/signin")
            //             // resetForm(); // Reset the form fields
            //             alert("Form submitted successfully!"); // Inform the user
            //             // console.log('Response:', response.data);
            //         }
            //     // }, 500)
            // })
        },
        validationSchema: myYup.object().shape({//Yup validation
            fullName: myYup.string().required("username is required").matches(/^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/, "Full name must start with an Uppercase and a space inbetween"),
            email: myYup.string().required("Email is required")
                .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "invalid email format"),
            Password: myYup.string()
                .required("Password is required")
                .matches(
                    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&.#]{8,}$/,
                    "Password must be at least 8 characters long, include one letter and one number, and may contain special characters."
                ),
            cPassword: myYup.string()
                .required("Confirm password is required")
                .oneOf([myYup.ref("Password")], "Passwords must match"),
            number: myYup.string(),
            profilePix: myYup.string(),
            visaType: myYup.string().required("VisaType is required"),
            destination: myYup.string().required("Destination is required"),
            applicationStatus: myYup.string().required("applicationStatus is required"),
            nationality: myYup.string().required("nationality is required"),
            currentCountry: myYup.string().required("currentcountry is required"),
            languages: myYup.string().required("languages is required"),
            immigrationExperience: myYup.string().required("Immigration is required"),
        })
    })

    return (
        <>
            <RegistrationNav progress={progress} />
            <RegistrationForm progress={setProgress} step={step} setStep={setStep} myFormik={myFormik} />
        </>
    )
}

export default Register