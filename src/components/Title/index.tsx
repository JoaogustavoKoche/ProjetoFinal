import React from "react";
import Form from "../Form";
import styles from './Tittle.module.scss';


export default function Tittle(){
    return(
        <div className={styles.containerTitle}>
            <div className={styles.titles}>
                <h1 className={styles.title}> Olá,</h1>
                <p className={styles.subtitle}> Para continuar navegando de forma segura, efetue o login na rede.</p>
            </div>
            <Form/>
        </div>
    )
}