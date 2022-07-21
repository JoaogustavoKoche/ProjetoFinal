/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-sequences */
import userIcon from "../../../../assets/IconUser.svg";
import styles from "./Input.module.scss";
import classNames from "classnames";
import { useContext, useState } from "react";
import { auth } from '../../../../firebase-config';
import { UserContext } from "../../../Context/User";



export default function EmailInput() {

    const [Active, setActive] = useState(false);
    const [Inactive, setInactive] = useState(false);
    const { email, setEmail, setValidEmail, error, setError, errorAc, setErrorAc} = useContext(UserContext);

    function validateEmail(email: HTMLInputElement) {
        const emailReg = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
		if(!email.value.match(emailReg)){
			setError(true);
			setValidEmail(false);
            setErrorAc(true);
		}else {
			setError(false);
			setValidEmail(true);
            setErrorAc(false);
		}
	}


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
        <div className={styles.Ns}>
            <div className={styles.inputContainer}>
                <input
                    className={classNames({
                        [styles.formInput]: true,
                        [styles.userActive]: Active,
                        [styles.inputErro]: errorAc
                    })}
                    type="email"
                    placeholder="Usuário"
                    id="email"
                    name="email"
                    onFocus={(event) => inputActive(event.target)}
                    onBlur={(event) => InputDesactive(event.target)}
                    value={email}
                    onChange={(event) => (
                        setEmail(event.target.value),
                        validateEmail(event.target)
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
        </div>
        </>
    )
}