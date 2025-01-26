import React from 'react'
import { visaTypes, countries, ApplicationStatus, languages, immigrationExperience } from './RegistrationArray'


function VisaInfo(props) {
    return (
        <>
            {/* Visa info section */}
            <div className="px-8 pt-10 sm:px-40 md:px-44 lg:px-96">
                <div className="px-0 lg:px-10">
                    <h2 className="font-bold text-lg mb-4">Visa Information</h2>

                    {/* Visa Type */}
                    <div className="h-14 shadow-md mb-5 bg-white rounded-lg flex items-center px-4">
                        <label htmlFor="visaType" className="mr-4 font-medium">
                            Visa Type:
                        </label>
                        <select
                            name="visaType"
                            id="visaType"
                            className="w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                            defaultValue=""
                            value={props.myFormik.values.visaType}
                            onChange={props.myFormik.handleChange}
                            onBlur={props.myFormik.handleBlur}
                        >
                            <option value="" disabled>
                                Select visa type
                            </option>
                            {visaTypes.map((visaType) => (
                                <option key={visaType} value={visaType}>
                                    {visaType}
                                </option>
                            ))}
                        </select>
                    </div>
                    {props.myFormik.touched.visaType && props.myFormik.errors.visaType ? (
                        <div className="text-red-600 text-xs">{props.myFormik.errors.visaType}</div>
                    ) : null}


                    {/* Destination Country */}
                    <div className="h-14 shadow-md mb-5 bg-white rounded-lg flex items-center px-4">
                        <label htmlFor="destination" className="mr-4 font-medium">
                            Destination Country:
                        </label>
                        <select
                            name="destination"
                            id="destination"
                            className="w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                            defaultValue=""
                            value={props.myFormik.values.destination}
                            onChange={props.myFormik.handleChange}
                            onBlur={props.myFormik.handleBlur}
                        >
                            <option value="" disabled>
                                Select destination
                            </option>
                            {countries.map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>
                    {props.myFormik.touched.destination && props.myFormik.errors.destination ? (
                        <div className="text-red-600 text-xs">{props.myFormik.errors.destination}</div>
                    ) : null}

                    {/* Application Status */}
                    <div className="h-14 shadow-md mb-5 bg-white rounded-lg flex items-center px-4">
                        <label htmlFor="applicationStatus" className="mr-4 font-medium">
                            Application Status:
                        </label>
                        <select
                            name="applicationStatus"
                            id="applicationStatus"
                            className="w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                            defaultValue=""
                            value={props.myFormik.values.ApplicationStatus}
                            onChange={props.myFormik.handleChange}
                            onBlur={props.myFormik.handleBlur}
                        >
                            <option value="" disabled>
                                Select status
                            </option>
                            {ApplicationStatus.map((status) => (
                                <option key={status} value={status}>
                                    {status}
                                </option>
                            ))}
                        </select>
                    </div>
                    {props.myFormik.touched.applicationStatus && props.myFormik.errors.applicationStatus ? (
                        <div className="text-red-600 text-xs">{props.myFormik.errors.applicationStatus}</div>
                    ) : null}
                </div>
            </div>
        </>
    )
}

export default VisaInfo