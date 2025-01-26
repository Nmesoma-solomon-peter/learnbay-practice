import React from 'react';
import PotentialConnect from './PotentialConnect';
import LeftProfilecard from './LeftProfilecard';
import Home from './Home';

function MainBody(props) {
    return (
        <div className='lg:pl-60 lg:pr-10 sm:px-2 px-0'>
            {/* <div className="grid grid-cols-3 gap-4"> */}
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
                {/* Left Part - 40% width */}
                <div className="col-span-1 border hidden sm:inline-block">
                    {/* Content for the left part */}
                    {/* <div className="bg-gray-300">
                    </div> */}

                    <LeftProfilecard profilePix={props.profilePix} fullName={props.fullName} immEx={props.immEx} cc={props.cc} nationality={props.nationality} destination={props.destination} />
                </div>

                {/* Right Part - 60% width */}
                <div className="col-span-2 mt-3">
                    {/* Content for the right part */}
                    <div className="sm:p-4 px-2">
                        {props.myPage == "/app/home" && <Home />}
                        {props.myPage == "/app/connect" && <PotentialConnect />}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MainBody;
