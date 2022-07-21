import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../../firebase-config";
import { UserContext } from "../../../Context/User";
import styles from './Buttons.module.scss';



export default function Buttons(){
    const navigate = useNavigate();
    const { setEmail, setPassword} = useContext(UserContext);

    async function logOut() {
        setEmail('');
        setPassword('');
        await signOut(auth);
        navigate('/');
    }

    return(
        <div className={styles.containerButtons}>
            <a href="https://google.com" target="_blank" rel="noreferrer">
                <button className={styles.continue}>Continuar Navegando</button>
            </a>
            <button className={styles.logout} onClick={()=> {logOut()}} >Logout</button>
        </div>
    );
}