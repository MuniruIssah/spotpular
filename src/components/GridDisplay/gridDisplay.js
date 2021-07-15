import React from 'react'
import styles from "./GridDisplay.module.css";
const GridDisplay = ({children}) => {
    return (
        <div className={styles.gridDisplay}>
            {children}
        </div>
    )
}

export default GridDisplay
