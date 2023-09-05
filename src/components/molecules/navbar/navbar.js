import React from 'react'
import styles from "../../../shared/styles/molecules/navbar.module.scss";
import { Logo } from '../../atoms';
const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <Logo/>
    </div>
  )
}

export default Navbar