import React from "react";
import FooterTitle from "./FooterTitle";
import styles from './Footer.module.scss';
import Chrono from "./Chronometer";
import Buttons from "./Buttons";


export default function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.containerF}>
                    <div className={styles.FooterT}>
                        <FooterTitle/>
                    </div>
                <div className={styles.FooterCh}>
                    <Chrono/>
                </div>
            </div>
            <Buttons/>
        </div>
    );
}