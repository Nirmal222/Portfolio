import React from 'react'
import styles from "../../../shared/styles/organisms/profile.module.scss"
import LandingPicture from "../../../shared/images/Landing_Picture.png"
import { Navbar } from '../../molecules'
const Profile = () => {
  return (
    <div className={styles.profile}>
        <Navbar/>
        <img src={LandingPicture}/>
    </div>
  )
}

export default Profile