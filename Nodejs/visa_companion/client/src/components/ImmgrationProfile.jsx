import React from 'react'
import { visaTypes, countries, ApplicationStatus, languages, immigrationExperience } from './RegistrationArray'

function ImmgrationProfile(props) {
    return (
        <>
            {/* Immigration Profile */}
            {/* 3. Immigration Profile
                        To enable personalized matchmaking and discussion:
                        
                         */}
            <div className="px-8 pt-10 sm:px-40 md:px-44 lg:px-96">
                <div className="px-0 lg:px-10">
                    <h2 className="font-bold text-lg mb-4">Immigration Profile</h2>

                    {/* Nationality */}
                    <div className="h-14 shadow-md mb-5 bg-white rounded-lg flex items-center px-4">
                        <label htmlFor="nationality" className="mr-4 font-medium">
                            Nationality (Country of Citizenship):
                        </label>
                        <select
                            name="nationality"
                            id="nationality"
                            className="w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                            defaultValue=""
                            value={props.myFormik.values.nationality}
                            onChange={props.myFormik.handleChange}
                            onBlur={props.myFormik.handleBlur}
                        >
                            <option value="" disabled>
                                Select Nationality
                            </option>
                            {countries.map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>
                    {props.myFormik.touched.nationality && props.myFormik.errors.nationality ? (
                        <div className="text-red-600 text-xs">{props.myFormik.errors.nationality}</div>
                    ) : null}

                    {/* Current Country */}
                    <div className="h-14 shadow-md mb-5 bg-white rounded-lg flex items-center px-4">
                        <label htmlFor="currentCountry" className="mr-4 font-medium">
                            Current Country:
                        </label>
                        <select
                            name="currentCountry"
                            id="currentCountry"
                            className="w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                            defaultValue=""
                            value={props.myFormik.values.currentCountry}
                            onChange={props.myFormik.handleChange}
                            onBlur={props.myFormik.handleBlur}
                        >
                            <option value="" disabled>
                                Select Current Country
                            </option>
                            {countries.map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>
                    {props.myFormik.touched.currentCountry && props.myFormik.errors.currentCountry ? (
                        <div className="text-red-600 text-xs">{props.myFormik.errors.currentCountry}</div>
                    ) : null}

                    {/* Languages */}
                    <div className="h-14 shadow-md mb-5 bg-white rounded-lg flex items-center px-4">
                        <label htmlFor="languages" className="mr-4 font-medium">
                            Languages:
                        </label>
                        <select
                            name="languages"
                            id="languages"
                            className="w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                            defaultValue=""
                            value={props.myFormik.values.languages}
                            onChange={props.myFormik.handleChange}
                            onBlur={props.myFormik.handleBlur}
                        >
                            <option value="" disabled>
                                Select Languages
                            </option>
                            {languages.map((lang) => (
                                <option key={lang} value={lang}>
                                    {lang}
                                </option>
                            ))}
                        </select>
                    </div>
                    {props.myFormik.touched.languages && props.myFormik.errors.languages ? (
                        <div className="text-red-600 text-xs">{props.myFormik.errors.languages}</div>
                    ) : null}

                    {/* Immigration Experience */}
                    <div className="h-14 shadow-md mb-5 bg-white rounded-lg flex items-center px-4">
                        <label htmlFor="immigrationExperience" className="mr-4 font-medium">
                            Immigration Experience:
                        </label>
                        <select
                            name="immigrationExperience"
                            id="immigrationExperience"
                            className="w-full border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                            defaultValue=""
                            value={props.myFormik.values.immigrationExperience}
                            onChange={props.myFormik.handleChange}
                            onBlur={props.myFormik.handleBlur}
                        >
                            <option value="" disabled>
                                Select Experience
                            </option>
                            {immigrationExperience.map((experience) => (
                                <option key={experience} value={experience}>
                                    {experience}
                                </option>
                            ))}
                        </select>
                    </div>
                    {props.myFormik.touched.immigrationExperience && props.myFormik.errors.immigrationExperience ? (
                        <div className="text-red-600 text-xs">{props.myFormik.errors.immigrationExperience}</div>
                    ) : null}
                </div>


            </div>
        </>
    )
}

export default ImmgrationProfile