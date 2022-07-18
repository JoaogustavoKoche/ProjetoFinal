import React from "react";
import Forms from "../../components/LoginComponents/Form/Index";
import Logo from "../../components/LoginComponents/Img";


import styles from './Login.module.scss';



export default function Login(){
    return(
        <div className={styles.login}>         
            <Forms/>
            <Logo/>
        </div>
    )
}