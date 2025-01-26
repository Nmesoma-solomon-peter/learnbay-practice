import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import the Link component
import LogoutPop from './LogoutPop';
import Axios from 'axios';

function MainNav(props) {
    const navigate = useNavigate()
    const profileSrc = props.profilePix?.startsWith("uploads")
        ? `http://192.168.1.65:5000/${props.profilePix}`
        : props.profilePix;
    const [searchMode, setSearchMode] = useState(false); // State to toggle search mode

    const [isOpen, setIsOpen] = useState(false);

    const [logPop, setLogPop] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        setLogPop(false); // Close modal
        Axios.post('http://192.168.1.65:5000/auth/user/signout', {
        },
            { withCredentials: true }
        ).then((output)=>{
            if (output.data.message === "Logged out successfully") {
                navigate("/login")
            }
        })
        // Perform logout logic here (e.g., remove token, redirect, etc.)
        console.log("User logged out!");

    };

    return (
        <div className="flex px-4 w-full py-5 sm:px-12 md:px-20 lg:px-60 shadow-lg overflow-x-hidden">
            {/* Logo and Search Bar Section */}
            <div className="flex justify-between items-center w-full">
                <div className="mr-5 w-10 items-center ml-0 pl-0 hidden sm:flex">
                    <Link to="/app/home">
                        <img
                            src="https://media.licdn.com/dms/image/v2/D560BAQEP0boSyNWWXQ/company-logo_100_100/company-logo_100_100/0/1708689668081?e=1745452800&v=beta&t=d2qvcc99nj8-ISIcBY6CfTxKS0v8u8FcFpata8FSu3A"
                            alt="logo"
                            className="w-full ml-0 pl-0"
                        />
                    </Link>
                </div>

                <div>
                    {/* Profile Picture */}
                    <div
                        className="w-9 h-9 rounded-full sm:hidden mr-5 cursor-pointer"
                        onClick={toggleNavbar}
                    >
                        <img
                            src={profileSrc}
                            alt="Profile"
                            className="w-9 h-9 rounded-full object-cover"
                        />
                    </div>

                    {/* Sliding Navbar */}
                    <div
                        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                            } transition-transform duration-300 z-50`}
                    >
                        {/* Close Button */}
                        <button
                            onClick={toggleNavbar}
                            className="absolute top-4 right-4 text-gray-600"
                        >
                            ✕
                        </button>

                        {/* User Info */}
                        <div className="flex flex-col items-center p-6">
                            <img
                                src={profileSrc}
                                alt="User"
                                className="w-16 h-16 rounded-full object-cover mb-4"
                            />
                            <h3 className="text-lg font-semibold">{props.fullName}</h3>
                            <p className="text-sm text-gray-600">{props.immEx} from {props.nationality} living in {props.cc} intending to travel to {props.destination} </p>
                        </div>

                        {/* Additional Links */}
                        <div className="mt-6">
                            <ul className="space-y-4">
                                <li>
                                    <a href="#profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <a href="#settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <div className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setLogPop(true)}>
                                        Logout
                                    </div>
                                </li>
                                {/* show logout popup */}
                                {/* {logPop && <LogoutPop />} */}

                            </ul>
                        </div>
                    </div>
                    {/* Overlay */}
                    {isOpen && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-30 z-40"
                            onClick={toggleNavbar}
                        ></div>
                    )}
                </div>




                {/* Desktop Search Bar */}
                <div
                    className={`hidden items-center sm:mr-10 md:mr-36 bg-gray-100 rounded-lg px-4 py-2 md:flex ${searchMode ? "hidden" : ""
                        }`}
                    style={{ backgroundColor: "#EDF3F8" }}
                >
                    <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
                    <input
                        type="text"
                        className="hidden md:block pl-3 w-full bg-transparent focus:outline-none text-gray-700"
                        placeholder="Search"
                    />
                </div>

                {/* Mobile Search Icon */}
                <div className="mt-2 mr-2 sm:mr-20 md:mr-60 md:hidden">
                    {!searchMode && (
                        <i
                            className="fa-solid fa-magnifying-glass text-lg cursor-pointer"
                            onClick={() => setSearchMode(true)} // Enable search mode
                        ></i>
                    )}
                </div>

                {/* Mobile Search Bar */}
                {searchMode && (
                    <div className="flex items-center w-full bg-gray-100 rounded-lg px-4 py-2 mt-2 md:hidden">
                        <i className="fa-solid fa-arrow-left text-gray-500 mr-3 cursor-pointer"
                            onClick={() => setSearchMode(false)} // Exit search mode
                        ></i>
                        <input
                            type="text"
                            className="w-full bg-transparent focus:outline-none text-gray-700"
                            placeholder="Search"
                        />
                    </div>
                )}
            </div>

            {/* Icons Section */}
            {!searchMode && (
                <div className="flex justify-between mt-2 ml-6 w-full md:ml-0">
                    <div className="w-12 lg:w-28">
                        <Link to="/app/home">
                            <i className="fa-solid fa-house cursor-pointer text-lg sm:text-lg md:text-xl lg:text-2xl"></i>
                        </Link>
                    </div>
                    <div className="w-12 lg:w-28">
                        <Link to="/app/connect">
                            <i className="fa-solid fa-people-group cursor-pointer text-lg sm:text-lg md:text-xl lg:text-2xl"></i>
                        </Link>
                    </div>
                    <div className="w-12 lg:w-28">
                        <Link to="/app/notification">
                            <i className="fa-solid fa-bell cursor-pointer text-lg sm:text-lg md:text-xl lg:text-2xl"></i>
                        </Link>
                    </div>
                    <div className="w-12 lg:w-28">
                        <Link to="/app/chat">
                            <i className="fa-solid fa-message cursor-pointer text-lg sm:text-lg md:text-xl lg:text-2xl"></i>
                        </Link>
                    </div>
                    <div className="w-12 lg:w-28 hidden sm:flex ">
                        <Link to="/app/profile">
                            <i className="fa-solid fa-user cursor-pointer text-lg sm:text-lg md:text-xl lg:text-2xl"></i>
                        </Link>
                    </div>
                </div>
            )}
            {/* Logout Modal */}
            {logPop && <LogoutPop onClose={() => setLogPop(false)} onLogout={handleLogout} />}
        </div>
    );
}

export default MainNav;
