import React from "react";
import styles from './FooterTitle.module.scss';

export default function FooterTitle(){
    return(
        <div className={styles.containerFL}>
            <div className={styles.FTitleContainer}>
                <p className={styles.title}>
                    Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.
                </p>
            </div>
            <div className={styles.line}></div>
        </div>
    );
}