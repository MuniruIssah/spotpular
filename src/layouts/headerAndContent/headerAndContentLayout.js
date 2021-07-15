import React from 'react'
import styles from "./HeaderAndContentLayout.module.css"
import SpHeader from "../../components/SPHeader/spHeader";
import LoudText from '../../components/LoudText/loudText';
import StartButton from '../../components/StartButton/startButton';
const HeaderAndContentLayout = () => {
    return (
        <div className={styles.headerAndContentLayout}>
        <SpHeader/>
        <LoudText/>
        <StartButton/>
            
        </div>
    )
}

export default HeaderAndContentLayout
