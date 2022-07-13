import React from "react";
import Logo from "../../components/Img";
import Title from "../../components/Title";
import styles from './Login.module.scss';



export default function Login(){
    return(
        <div className={styles.login}>
            <Title/>
            <Logo/>
        </div>
    )
}