import React, { useState } from 'react';
import ConnectionOutercard from './ConnectionOutercard';
import Axios from 'axios';
import { useCookies } from 'react-cookie'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PotentialConnect() {
    const navigate = useNavigate();
    // const [cookies, removeCookie] = useCookies([]);
    const [allUsers, setAllUsers] = useState([])
    Axios.defaults.withCredentials = true
    // useEffect(()=>{
    //     window.location.reload()
    // })
    // useEffect(() => {
    //     const verifyCookie = async () => {
    //         const newToken = cookies.token
    //             if (!newToken ) {
    //                 navigate("/login")
    //             }
    //     }
    //     verifyCookie();

    // }, [cookies, navigate,removeCookie])
    // Axios.post("http://localhost:5000/verified/users/findall",{}, { withCredentials: true, })
    //         .then((output) => {
    //             console.log(output);
    //         })


    useEffect(() => {
        Axios.get("http://192.168.1.65:5000/verified/users/findall", {}, { withCredentials: true, })
            .then((output) => {
                if (output.data.status == false) {
                    navigate("/login")
                }
                setAllUsers(output.data.user);
            })
    },[navigate])

    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3">
                {
                    allUsers.map((user) => {
                        return <div key={user._id}>
                            <ConnectionOutercard name={user.fullName} nationality={user.nationality} exp={user.immigrationExperience} profilePix={user.profilePix} cc={user.currentCountry} destination={user.destination} />
                        </div>
                    })
                }
            </div>
        </>
    );
}

export default PotentialConnect;
