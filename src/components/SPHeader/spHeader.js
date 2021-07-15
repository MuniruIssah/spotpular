import React from 'react'
import styles from "./SPHeader.module.css";
import spIcon from "../../assets/spotifyWhite.png"
const SpHeader = () => {
    return (
        <header className={styles.spHeader}>
            <img src={spIcon} alt='spotify icon'/>
            <span>Spotpular</span>
        </header>
    )
}

export default SpHeader
