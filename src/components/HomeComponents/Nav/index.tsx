import React from "react";
import Clock from "./Clock";
import styles from './Nav.module.scss';
import logo from '../../../assets/LogoCompasso.png';
import Weather from "./Weather";

export default function Navbar() {
    return(
        <div className={styles.container}>
            <img src={logo} alt="Logo Compass" />
            <Clock/>
            <Weather/>
        </div>
    );
}