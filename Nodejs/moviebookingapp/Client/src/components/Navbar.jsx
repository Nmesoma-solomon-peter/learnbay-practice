import React, { useEffect, useState, useRef } from 'react'
import Axios from "axios";
import { useLocation } from 'react-router-dom';

function Navbar() {
    const [drama, setDrama] = useState([]);
    const [action, setAction] = useState([]);

    useEffect(() => {
        const fetchedDrama = async () => {
            try {
                const allDrama = await Axios.get("http://localhost:5000/getallmovie/drama");
                const allAction = await Axios.get("http://localhost:5000/getallmovie");
                setDrama(allDrama.data.data);
                setAction(allAction.data.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchedDrama();
    }, [])

    // animation scroll

    const useAutoScroll = (scrollRef, interval = 3000) => {
        useEffect(() => {
            const scrollContainer = scrollRef.current;
            if (!scrollContainer) return;

            let intervalId;
            let scrollAmount = 0;

            const autoScroll = () => {
                const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
                scrollAmount = (scrollAmount + scrollContainer.clientWidth) % (maxScrollLeft + 1);
                scrollContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
            };

            intervalId = setInterval(autoScroll, interval);

            return () => clearInterval(intervalId); // Cleanup
        }, [scrollRef, interval]);
    };

    const dramaScrollRef = useRef(null);
    const actionScrollRef = useRef(null);

    useAutoScroll(dramaScrollRef, 4000);
    useAutoScroll(actionScrollRef, 1000);
    // toggle action

    const mobileNavRef = useRef(null); // Ref for the mobile navigation
    const [isHidden, setIsHidden] = useState(true); // State to toggle visibility

    const showMobileIcon = () => {
        const mobileNav = mobileNavRef.current;
        if (mobileNav && mobileNav.classList.contains("hidden")) {
            console.log("hi"); // Hidden case
            setIsHidden(false);
        }
        else {
            console.log("hello"); // Shown case
            setIsHidden(true);
        }
    };

    // Check if the screen size is mobile
    const [isMobile, setIsMobile] = useState(false); // State to detect mobile view
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Mobile width threshold (e.g., 768px)
        };

        // Run on mount and resize
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Get the current location
    const location = useLocation();

    // Extract the path
    const currentPath = location.pathname;    

    return (
        <>
            <div className={currentPath != "/" ? "hidden" : "block" }>
                <div className='flex flex-nowrap overflow-x-auto scrollbar-hide' ref={dramaScrollRef}>
                    {
                        drama.map((i, index) => (
                            <img
                                key={index}
                                src={i.image_url}
                                className='flex-none w-full sm:w-full md:w-1/2 lg:w-1/3 shadow-lg h-96 object-cover mt-cover'
                                alt={`Movie ${index + 1}`}
                            />
                        ))
                    }
                </div>
                {/* the floating thing should be here */}
                <h3
                    style={{
                        backgroundImage: `url(data:image/jpeg;base64,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)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        color: "white", // Ensure text is readable 
                        padding: "20px" // Add padding for spacing
                    }} className='lg:text-6xl lg:inline-block lg:absolute lg:w-4/12 lg:h-96 lg:mt-1 lg:ml-0  md:text-3xl uppercase text-center items-center '>latest and
                    upcoming
                    movies</h3>
                {/* second movable card section */}
                <div className='flex flex-nowrap overflow-x-auto  scrollbar-hide' ref={actionScrollRef} >
                    {
                        action.map((i, index) => (
                            <img
                                key={index}
                                src={i.image_url}
                                className='flex-none w-full sm:w-full md:w-1/2 lg:w-60 shadow-lg h-96 object-cover mt-cover m-1'
                                alt={`Movie ${index + 1}`}
                            />
                        ))
                    }
                </div>
            </div>
            <nav className="bg-gray-800 sticky top-0">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={showMobileIcon}>
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>

                                <svg className="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex shrink-0 items-center">
                                <h2 className='text-2xl font-bold text-white'>Bookit</h2>
                            </div>
                            <div className="hidden sm:ml-6 sm:block" id='mobileNav'>
                                <div className="flex space-x-4">
                                    <a href="/" className="rounded-md bg-rose-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Home</a>
                                    <a href="/signup" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-rose-700 hover:text-white">Sign up </a>
                                    <a href="/booking" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-rose-700 hover:text-white">Booking list</a>
                                    <a href="/movies" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-rose-700 hover:text-white">Movies</a>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">View notifications</span>
                                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                </svg>
                            </button>

                            <div className="relative ml-3">
                                <div>
                                    <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">Open user menu</span>
                                        <img className="size-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    </button>
                                </div>


                                {/* <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={isMobile ? (isHidden ? "hidden" : "block") : "hidden"} ref={mobileNavRef} id="mobileNav"
                >
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <a href="/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-rose-700 hover:text-white">Home</a>
                        <a href="/signup" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-rose-700 hover:text-white">Sign up</a>
                        <a href="/booking" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-rose-700 hover:text-white">Booking list</a>
                        <a href="/movies" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-rose-700 hover:text-white">Movies</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar