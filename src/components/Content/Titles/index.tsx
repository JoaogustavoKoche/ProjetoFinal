import React from "react";
import styles from './TitlesNav.module.scss';
import logobol from "../../../assets/BolaLogoCompasso.png";



export default function TitlesNav(){
    return(
        <>
        <img src={logobol} alt="Logo Compasso" className={styles.logoBolaComps}/>
        <div className={styles.text}> 
            <div className={styles.textEngSm}>
                Our mission is
            </div>
            <div className={styles.textPtSm}>
                Nossa missão é
            </div>

            <div className={styles.textEng}>
                to transform the world
            </div>
            <div className={styles.textPtSm}>
                transformar o mundo
            </div>

            <div className={styles.textEng}>
                building digital experiences
            </div>
            <div className={styles.textPtSm}>
                construindo experiências digitais
            </div>

            <div className={styles.textEng}>
                that enable our client's growth
            </div>
            <div className={styles.textPtSm}>
                que permitam o crescimento de nossos clientes
            </div>
        </div>
        </>
    )
}