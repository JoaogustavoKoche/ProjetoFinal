import React from "react";
import FormsCreate from "../../components/CreateAcComponents/Form/Index";
import Logo from "../../components/LoginComponents/Img";


import styles from './Login.module.scss';



export default function Create(){
    return(
        <div className={styles.login}>         
            <FormsCreate/>
            <Logo/>
        </div>
    )
}