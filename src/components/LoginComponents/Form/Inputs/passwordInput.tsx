/* eslint-disable no-sequences */
import passIcon from "../../../../assets/IconPass.svg";
import styles from "./Input.module.scss";
import classNames from "classnames";
import { useState } from "react";


export default function PasswordInput() {


    const [Active, setActive] = useState(false);
    const [Inactive, setInactive] = useState(false);


    function inputActive(input: HTMLInputElement) {
        setInactive(true);
        setActive(true);
    }

    function InputDesactive(input: HTMLInputElement) {
        setInactive(false);
        setActive(false);
    }
    
    
    return (
        <>
            <div className={styles.inputContainer}>
                <input
                    className={classNames({
                        [styles.formInput]: true,
                        [styles.passActive]: Active
                    })}
                    type="password"
                    placeholder="Senha"
                    onFocus={(event) => inputActive(event.target)}
                    onBlur={(event) => InputDesactive(event.target)}
                />
                <img 
                    className={classNames({
                        [styles.passIcon]: true,
                        [styles.inactiveIcon]: Inactive
                    })}
                    src={passIcon} 
                    alt="Password Icon" 
                />
            </div>
        </>
    );
}