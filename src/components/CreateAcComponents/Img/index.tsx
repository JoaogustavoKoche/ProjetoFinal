import React from "react";
import styles from './Image.module.scss';
import logo from '../../../assets/Logo.png';

export default function Logo(){
    return(
        <div className={styles.containerImage}>
            <img className={styles.containerLogo} src={logo} alt="Logo" />
        </div>
    )
}