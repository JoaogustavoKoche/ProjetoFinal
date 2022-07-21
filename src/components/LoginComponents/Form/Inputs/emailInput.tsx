/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-sequences */
import userIcon from "../../../../assets/IconUser.svg";
import styles from "./Input.module.scss";
import classNames from "classnames";
import { useContext, useState } from "react";
import { UserContext } from "../../../Context/User";

export default function EmailInput() {

    const [Active, setActive] = useState(false);
    const [Inactive, setInactive] = useState(false);

    
    const { email, setEmail, setEmailValid, error, setError } = useContext(UserContext);

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
                        [styles.userActive]: Active,
                        [styles.inputErro]: error
                    })}
                    type="email"
                    placeholder="Usuário"
                    value={email}
                    onFocus={(event) => inputActive(event.target)}
                    onBlur={(event) => InputDesactive(event.target)}
                    onChange={(event)=> (
                        setEmail(event.target.value)
                    )}
                    
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