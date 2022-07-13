import React from "react";

import Input from "../Input";
import styles from './Form.module.scss';

export default function Form(){
    return(
        <div className={styles.form}>
            <h2 className={styles.login}> Login </h2>
            <form>
                <Input />
            </form>
        </div>
    );
}