import React, { useEffect, useState } from 'react'
import Axios from "axios"

function Theatreandlocation(props) {
    const [locationInfo, setLocationInfo] = useState([])
    const [selectedLocation, setSelectedLocation] = useState("")
    useState(() => {
        Axios.get("http://localhost:5000/findtheatrelocation")
            .then((locationDetails) => {
                setLocationInfo(locationDetails.data.details)
            })
            .catch((error) => {
                console.error("Error fetching location details:", error);
            });
    }, [])

    const handleLocationChange = () => {
        setSelectedLocation(event.target.value);
    }

    useEffect(() => {
        console.log(locationInfo);
    }, [locationInfo])

    return (
        <>
        <div className="flex flex-wrap justify-between px-6 py-16">
            <h3 className="text-4xl sm:text-3xl md:text-4xl font-semibold">{props.movieName}</h3>
            <select
                name="location"
                value={selectedLocation}
                className="p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 w-full sm:w-auto"
                onChange={handleLocationChange}
            >
                <option value="" disabled>Select a location</option>
                {locationInfo.map((i, index) => (
                    <option key={index} value={i.location} className="py-2 px-4 text-gray-700 hover:bg-gray-800">
                        {i.location}
                    </option>
                ))}
            </select>
        </div>
    
        {selectedLocation === "" ? locationInfo.map((j) => {
            return (
                <div key={j.id} className="space-y-8 mx-6 sm:mx-16 lg:mx-40">
                    {j.theatre.map((theatreDetails, index) => {
                        return (
                            <div key={index} className="flex flex-col sm:flex-row space-x-0 sm:space-x-8 p-6 border-b border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                                <img
                                    src={theatreDetails.theatreImage}
                                    alt={theatreDetails.theatreName}
                                    className="w-full sm:w-64 h-auto sm:h-64 object-cover rounded-lg shadow-md"
                                />
                                <div className="flex-1 py-6 sm:py-10">
                                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">{theatreDetails.theatreName}</h3>
                                    <div className="mt-4 space-y-2">
                                        {theatreDetails.showTimes.map((i, idx) => {
                                            return (
                                                <button
                                                    key={idx}
                                                    className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 sm:ml-5"
                                                >
                                                    {i}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        }) : locationInfo.filter((i) => i.location === selectedLocation).map((i) => {
            return (
                <div key={i.id} className="space-y-8 mx-6 sm:mx-16 lg:mx-40">
                    {i.theatre.map((theatreDetails, index) => {
                        return (
                            <div key={index} className="flex flex-col sm:flex-row space-x-0 sm:space-x-8 p-6 border-b border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                                <img
                                    src={theatreDetails.theatreImage}
                                    alt={theatreDetails.theatreName}
                                    className="w-full sm:w-64 h-auto sm:h-64 object-cover rounded-lg shadow-md"
                                />
                                <div className="flex-1 py-6 sm:py-10">
                                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">{theatreDetails.theatreName}</h3>
                                    <div className="mt-4 space-y-2">
                                        {theatreDetails.showTimes.map((i, idx) => {
                                            return (
                                                <button
                                                    key={idx}
                                                    className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 sm:ml-5 ml-5"
                                                >
                                                    {i}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        })}
    </>
    
    )
}

export default Theatreandlocation