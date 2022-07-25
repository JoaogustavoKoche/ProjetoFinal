import React from "react";
import TitlesNav from "./Titles";
import styles from './Titles.module.scss';

export default function Content(){
    return(
        <div className={styles.ContainerTC}>
            <TitlesNav />
        </div>
    );
}