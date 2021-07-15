import React from 'react'
import styles from './FilterStrip.module.css'
export const FilterStrip = () => {
    const buttonList=['All Genres','Countries']
    return (
        <div className={styles.filterStrip}>
            {
                buttonList.map(button=><FilterStripButton key={button} title={button} />)
            }
        </div>
    )
}

//Strip Button

 const FilterStripButton = ({title}) => {
    return (
        <button className={styles.filterStripButton}>
            {title}
        </button>
    )
}
