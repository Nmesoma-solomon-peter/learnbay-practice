import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function LeftProfilecard(props) {
    
    // const [loggedInUser, setLoggedInUser] = useState({})
    const profileSrc = props.profilePix?.startsWith("uploads")
        ? `http://192.168.1.65:5000/${props.profilePix}`
        : props.profilePix;

    // useEffect(() => {
    //     Axios.get("http://192.168.1.65:5000/verified/users/findloggedinuser/", {}, {
    //         withCredentials: true, // This ensures cookies are sent
    //     }).then((output) => {
    //             setLoggedInUser(output.data.user[0]);
    //             console.log(output.data.user[0]);
    //         })
    // }, [])

    return (
        <>
            <div className="relative w-full mb-5 rounded-lg ">
                {/* Banner Image */}
                <div className='w-full'>
                    <img
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIWFRUXFRcVFxcXFxUVFRcXFxUXFxUVFRcYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAPFy0dFR0tLS0rLSsrLSstLS0rLS0tLSsrKystLS0tKy0tKy03LSs3LSstKy0tKy0rNys3KysrK//AABEIAH0BkgMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAABAgADB//EACYQAQEBAQABAwIGAwAAAAAAAAABEQLwEiExQWFxgZGhsfEDUcH/xAAZAQEBAQADAAAAAAAAAAAAAAABAAIDBQb/xAAZEQEBAQEBAQAAAAAAAAAAAAAAARFBAjH/2gAMAwEAAhEDEQA/APLToL0DsyKWxENIyhgMVjM3GoSJDhJxUg5VDGo0aQwwppGqgiJFSNFQISHDOdrTlEekxrDPPgJUTqh1DUmxqrBoAoxdZFODCcSQLV9I6ioc6MVjYzjKerWqsGEobFYOlgwWJpl9vdPVFFaNYJPsdQTIJDaACA1qRSdSLUyOlUM1iqlZO1lq1ZDRtqKaBkSZExSRlUlTUMOmAyFpXJlEhkJhhlEMJVhaVkQZLvnn9KxcgxCQ0yMSnmKsLUJMLZ5/BiCcaLwYsWJxlWJSTTeWNCROf9jr91aOr/PmIJT0uC6kiheCFJqMdOk1WaLHPAtmcGJFWm04sTibHRPQxmxFGGxmQ1SrBiQSqxNoFZjGZZYxmlbaMDUxIxrQqImEaqNEwxo0ajUXI2A0tRsVGitRELSnUlcq0cmRFTSCw8xJo2KZLGjQxkWFVCi52D4VWwYyixlVFQaiw4m1JqyrU6U1c7+K5E2pI7Trp1EYOs1NaNjANamtehqtTVFVRAzRI3RFAA1hUm6qWxsZZVN8gGz7foGAoiM5I1FMJFYi0hBhRhnyIolUVHPlUajUWUNKWtXKUSq0JcKeVwlUUmQwtKkE+RogodNZGnVpXGqWl89vokup9X0OmIpk/op659/nDmIMKJSgmNhtTqFbE+fdVTUhU1SUhiVaKgmJsVUTz9AE+kRfSbWbGcaikVAUG2JrIBsZkkp02BlinGMYZEJVIimpTDpEJaKpXPVymJTBtJVFc1z1crUMVabRDC2xkbWnnn5oOkVIiKTSpSjTEVaYI3qqTWRznXldOo59zz7MehXbm6rXH/HXSdfZqUym9eefgvUxrS0OqmUqlWDBARakOgbU6g3qTpqUDUq1FSTBa1RazazafUnQ1/Yazp0M2JCp6pFFZDDRKzqI06nrpaLRGrRhwMxAZaFMioYYYUnS0dVEG/gdSyidKOkxUqCZTHXWlTK2ta1q9blNplRdNMRCS6QoikVmplb1IqqJyZ1rXoJUn2GSfTz8xO21JWlMNSMnnu2p1rSgnTRrIMrWph0oWjWtCBqLVahVUWpqrUazWa2tUzoiMmgA6hQ1ZkMKUqhhhFZGD4ErMGVQGULUIYGUUUzNpaMpxPqUYYYZQdJMpgw4UWgkUYWlMCjISqJhLUXChoS6RsHNKJhxLakbDzUytzQlynUgnV9VNqbU3sWi1WNOk6NAVrWp1tSVagWtVo0/RzsNqbRaDo6FGIMGYMsnrnWtb1C4qQ3qFq1NU62t7M6ywtbRo0DW1qGQoiEAQo063KVaUadWnVaYltOlemCGVpo6YmmUo1Wo6pi1aqVUrnKuVqGVetqWlOtOkrJlbSVylMaVE+fsu1EadJGFNv8AwUJ0lGp5rLUbU2snz+RVTptT17AaG9Rrn/kue51nWdVqbfjz2Rz3tq70vsG630ia1GFH1GRPw0qSkdHqufVHqi1oNjf78+grGs6rACkGxhasgFglVU2s0HQNajQqVhCk/9k="
                        alt="banner" className='rounded-t-lg w-full '
                    />
                </div>

                {/* Profile Picture */}
                <div className="absolute top- left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32">
                    <img
                        src={`${profileSrc}`} alt="profile pix"
                        className="rounded-full border-4 border-white w-32 h-32 object-cover"
                    />
                </div>
                {/* <div className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32">
                    <img
                        src={`${profileSrc}`}
                        alt="profile pix"
                        className="rounded-full border-4 border-white object-cover w-32 h-32"
                    />
                </div> */}


                <div className='text-center mt-20 mb-8'>
                    <h3>{props.fullName}</h3>
                    <h3>Nationality: {props.nationality}</h3>
                    <h3>Exp: {props.immEx}</h3>
                </div>
            </div>

        </>
    )
}

export default LeftProfilecard