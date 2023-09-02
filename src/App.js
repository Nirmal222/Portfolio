import React from 'react'
import styles from "../App.module.scss"
import { Profile } from './components'
const App = () => {
  return (
    <div className={styles.app} >
        <Profile/>
    </div>
  )
}

export default App