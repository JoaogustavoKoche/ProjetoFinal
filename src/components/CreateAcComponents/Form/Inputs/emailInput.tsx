/* eslint-disable no-sequences */
import userIcon from "../../../../assets/IconUser.svg";
import styles from "./Input.module.scss";
import classNames from "classnames";
import { useState } from "react";

export default function EmailInput() {

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
                        [styles.userActive]: Active
                        
                    })}
                    type="email"
                    placeholder="Usuário"
                    onFocus={(event) => inputActive(event.target)}
                    onBlur={(event) => InputDesactive(event.target)}
                    
                />
                <img
                    className={classNames({
                        [styles.userIcon]: true,
                        [styles.inactiveIcon]: Inactive
                    })} 
                    src={userIcon} 
                    alt="User Icon" 
                />
            </div>
        </>
    )
}