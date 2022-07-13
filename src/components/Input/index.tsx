import React, { useState } from "react";
import styles from './Input.module.scss';
import User from "../../assets/IconUser.svg";
import Pass from "../../assets/IconPass.svg";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";


export default function Input(){
    
    function teste(event: { preventDefault: () => void; }) {
        if (name === "") {
            setHide(true);
            setErrorActive(true);
            event.preventDefault()
        } else {
            setHide(false);
            setErrorActive(false);
            navigateHome()
        }
    }

    const navigate = useNavigate();
    const navigateHome = () => {navigate('/home');};

    const [name, setName] = useState("");
    const [hide, setHide] = useState(false);
    const [errorActive, setErrorActive] = useState(false);
    
    return(
        <>
            <input className={classNames({
                [styles.input]: true,
                [styles.inputError]: errorActive
            })}
            
                placeholder="Usuário"
                value={name}
                onChange={(event) => setName(event.target.value)}
            > 
            </input>

            <img className={styles.icons} src={User} alt="User" />

            <input className={classNames({
                [styles.input]: true,
                [styles.inputError]: errorActive
            })}
            
                placeholder="Senha"
            ></input>
            <img className={styles.icons} src={Pass} alt="Password" />

            <div className={styles.errorArea}>
                {hide && (
                <span className={styles.errorMessage}>
                    Ops, usuário ou senha inválidos.
                    <br />
                    Tente novamente!
                </span>
                )}
            </div>

            <button onClick={teste} className={styles.button}>Continuar</button>
            
        </>
    )
}

