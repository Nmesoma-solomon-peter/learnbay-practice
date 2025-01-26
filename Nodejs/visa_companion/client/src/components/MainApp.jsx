import React from 'react'
import MainNav from './MainNav'
import MainBody from './MainBody'
import { useEffect, useState } from 'react'
import Axios from 'axios'
import { useLocation } from "react-router-dom";



function MainApp() {
  const location = useLocation();
  const [loggedInUser, setLoggedInUser] = useState({})
  const [page, setPage] = useState("/app/home");


  Axios.defaults.withCredentials = true

  useEffect(() => {
    Axios.get("http://192.168.1.65:5000/verified/users/findloggedinuser/", {}, {
      withCredentials: true, // This ensures cookies are sent
    })
      .then((output) => {
        setLoggedInUser(output.data.user[0]);
      })
  }, [])

  useEffect(() => {
    setPage(location.pathname)
  },[location.pathname])

  return (
    <>
      {/* nav bar */}
      <MainNav profilePix={loggedInUser.profilePix} fullName={loggedInUser.fullName} immEx={loggedInUser.immigrationExperience} cc={loggedInUser.currentCountry} nationality={loggedInUser.nationality} destination={loggedInUser.destination} />

      {/* body */}
      <MainBody myPage={page} profilePix={loggedInUser.profilePix} fullName={loggedInUser.fullName} immEx={loggedInUser.immigrationExperience} cc={loggedInUser.currentCountry} nationality={loggedInUser.nationality} destination={loggedInUser.destination} />

    </>
  )
}

export default MainApp