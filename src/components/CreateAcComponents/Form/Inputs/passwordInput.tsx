/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-sequences */
import passIcon from "../../../../assets/IconPass.svg";
import styles from "./Input.module.scss";
import classNames from "classnames";
import { useContext, useState } from "react";
import { UserContext } from "../../../Context/User";


export default function PasswordInput() {

    const { password, setPassword, setValidPassword, error, setError, errorAc, setErrorAc} = useContext(UserContext);
    const [Active, setActive] = useState(false);
    const [Inactive, setInactive] = useState(false);
    const [hideac, setHideac] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);
    const [numCheck, setNumChecked] = useState(false);
    const [upperCheck, setUpperChecked] = useState(false);
    const [lowerCheck, setLowerChecked] = useState(false);
    const [lengthCheck, setLengthChecked] = useState(false);

    function inputActive(input: HTMLInputElement) {
        setInactive(true);
        setActive(true);
        setHideac(true);
    }

    function InputDesactive(input: HTMLInputElement) {
        setInactive(false);
        setActive(false);
        setHideac(false);
    }

    function validatePassword(password: HTMLInputElement) {
        const passwordReg = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/);
        const number = new RegExp(/[0-9]/g);
        const upper = new RegExp(/[A-Z]/g);
        const lower = new RegExp(/[a-z]/g);

        if(!password.value.match(number)){
            setNumChecked(false)
        } else{
            setNumChecked(true)
        }

        if(!password.value.match(upper)){
            setUpperChecked(false)
        } else {
            setUpperChecked(true)
        }

        if(!password.value.match(lower)){
            setLowerChecked(false)
        } else {
            setLowerChecked(true)
        }

        if(password.value.length < 6){
            setLengthChecked(false)
        }else{
            setLengthChecked(true)
        }
        if (!password.value.match(passwordReg)) {
            //ficou redundante
            setError(true);
            setValidPassword(false);
            setInvalidPassword(true);
            setErrorAc(true)
        } else {
            setError(false);
            setValidPassword(true);
            setInvalidPassword(false);
            setErrorAc(false)
        }
    }


    return (
        <>
            <div className={styles.Ns}>
                <div className={styles.inputContainer}>
                    <input
                        className={classNames({
                            [styles.formInput]: true,
                            [styles.passActive]: Active,
                            [styles.inputErro]: errorAc
                        })}
                        type="password"
                        placeholder="Senha"
                        id="password"
                        name="password"
                        onFocus={(event) => inputActive(event.target)}
                        onBlur={(event) => InputDesactive(event.target)}
                        value={password}
                        onChange={(event) => (
                            setPassword(event.target.value),
                            validatePassword(event.target)
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
                <div className={classNames({
                        [styles.teste]: true,
                        [styles.teste3]: hideac
                })}>
                    <label 
                        className={classNames({
                            [styles.teste2]: true,
                            [styles.green]: numCheck})} 
                        htmlFor="numero"
                        >Número</label>
                    <label 
                        className={classNames({
                            [styles.teste2]: true,
                            [styles.green]: upperCheck})} 
                        htmlFor="maiuscula"
                        >Maiuscula</label>
                    <label 
                        className={classNames({
                            [styles.teste2]: true,
                            [styles.green]: lowerCheck})} 
                        htmlFor="minuscula"
                        >Minuscula</label>
                    <label 
                        className={classNames({
                            [styles.teste2]: true,
                            [styles.green]: lengthCheck})} 
                        htmlFor="caracteres"
                        >6 caracteres</label>
                </div>
            </div>
        </>
    );
}