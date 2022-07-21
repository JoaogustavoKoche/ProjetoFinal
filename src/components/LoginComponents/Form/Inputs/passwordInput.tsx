/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-sequences */
import passIcon from "../../../../assets/IconPass.svg";
import styles from "./Input.module.scss";
import classNames from "classnames";
import { useContext, useState } from "react";
import { UserContext } from "../../../Context/User";


export default function PasswordInput() {


    const [Active, setActive] = useState(false);
    const [Inactive, setInactive] = useState(false);

    const {password, setPassword, error } = useContext(UserContext);

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
                        [styles.passActive]: Active,
                        [styles.inputErro]: error
                    })}
                    type="password"
                    placeholder="Senha"
                    onFocus={(event) => inputActive(event.target)}
                    onBlur={(event) => InputDesactive(event.target)}
                    onChange={(event) => (
                        setPassword(event.target.value)
                )}
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