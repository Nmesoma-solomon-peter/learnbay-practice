import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import "./RegistrationForm.css"



function RegistrationNav(props) {
    const location = useLocation();
    const path = location.pathname;

    return (
        <>
            <div className='w-full flex bg-white items-center justify-between shadow-md h-20 px-8 sm:px-16 sm:h-24 gap-3 fixed '>
                <img src="https://visacompanion.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvisa-companion.47ee4bd8.svg&w=256&q=75" alt="registration navbar"
                    className='w-24 sm:w-36 md:w-52'
                />
                <div style={{ width: "600px", height: "4px", backgroundColor: "#E9ECEF" }} className={`rounded-md  ${path === "/login" ? 'hidden' : ''}`}>
                    <div style={{ width: props.progress, height: "4px", backgroundColor: "#896DC5" }} className='rounded-md'></div>
                </div>

                <div className='gap-3 hidden md:flex'>
                    <p className='text-xs md:text-lg'>{path === "/login" ? "Don't have an account?" :  'Already have an acount?'}</p>
                    <Link to={path === "/login" ? '/signup' :   "/login"} style={{ color: "#896DC5" }} className='text-xs md:text-lg'> {path === "/login" ? 'Sign Up now!' :   "Log in now!"}</Link>
                </div>

                {/* login button */}
                <Link to={path === "/login" ? '/signup' :   "/login"} ><button className=' md:hidden bg-primary text-white w-36 h-10 rounded-md'>{path === "/login" ? 'Sign up' :   "Login"}</button>
                </Link>
            </div>
        </>

    )
}

export default RegistrationNav