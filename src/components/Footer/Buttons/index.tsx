import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './Buttons.module.scss';



export default function Buttons(){
    const navigate = useNavigate();
    return(
        <div className={styles.containerButtons}>
            <a href="https://google.com" target="_blank">
                <button className={styles.continue}>Continuar Navegando</button>
            </a>

            <button className={styles.logout} onClick={()=> navigate('/')} >Logout</button>
        </div>
    );
}