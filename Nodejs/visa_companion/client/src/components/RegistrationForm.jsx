import React from 'react'
import "./RegistrationForm.css"
import ImmgrationProfile from './ImmgrationProfile'
import VisaInfo from './VisaInfo'
import PersonalInfo from './PersonalInfo'
import { useNavigate } from 'react-router-dom'


function RegistrationForm(props) {
    const navigate = useNavigate()
    const levels = { 1: 7, 2: 4, 3:0};
    const levelValue = levels[props.step] || 0;
    const nextStep = () => {
       
        switch (props.step) {            
            case 1:
                if (Object.keys(props.myFormik.errors).length == 0 || Object.keys(props.myFormik.errors).length > levelValue ) {
                    alert("Please fill the form with the right input and try again")
                }else{
                   console.log(Object.keys(props.myFormik.errors).length);
                    props.setStep((prevStep) => Math.min(prevStep + 1, 3));
                }
                break;
            case 2:
                if (Object.keys(props.myFormik.errors).length > levelValue ) {
                    alert("Please fill the form with the right input and try again")
                }else{
                    props.setStep((prevStep) => Math.min(prevStep + 1, 3));
                }
            default:
                break;
        }
    }
    const prevStep = () => props.setStep((prevStep) => Math.max(prevStep - 1, 1));
    const submit = () => {
        console.log(props.myFormik.errors);
        if (Object.keys(props.myFormik.errors).length > levelValue ) {
            alert("Please fill the form with the right input and try again")
        }else{
            props.myFormik.handleSubmit()
            // navigate('/login')
        }
    }


    return (
        // style={{ backgroundColor: '#F5F7FA' }}
        <>
            <form action=""  encType='multipart/form-data'>
                <div className='w-full min-h-screen pt-24'>
                    {props.step === 1 && (
                        <PersonalInfo myFormik={props.myFormik} />
                    )}
                    {props.step === 2 && (
                        <VisaInfo myFormik={props.myFormik} />
                    )}
                    {props.step === 3 && (
                        <ImmgrationProfile myFormik={props.myFormik} />
                    )}

                    <div className="px-8 pt-10 sm:px-40 md:px-44 lg:px-96">
                        {
                            props.step > 1 ?
                                <div>
                                    <div className='h-14 shadow-md my-5 bg-primary text-white text-center py-4 rounded-lg cursor-pointer' onClick={props.step === 3 ? submit : nextStep} >
                                        {props.step === 3 ? 'Sign up' : 'Next Step'}  {props.step === 3 ? '' : <i className="fa-solid fa-arrow-right"></i>}
                                    </div>
                                    <div className='text-center py-4 cursor-pointer' onClick={prevStep}>
                                        <a> <i className="fa-solid fa-arrow-left"></i> Previous</a>
                                    </div>
                                </div>
                                : <div className='h-14 shadow-md my-5 bg-primary text-white text-center py-4 rounded-lg cursor-pointer' onClick={nextStep}>
                                    Next Step <i className="fa-solid fa-arrow-right"></i>
                                </div>
                        }
                    </div>
                </div>
            </form>
        </>
    )
}

export default RegistrationForm