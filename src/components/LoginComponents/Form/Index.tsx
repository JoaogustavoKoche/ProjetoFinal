/* eslint-disable @typescript-eslint/no-unused-vars */

import styles from './Forms.module.scss';
import PasswordInput from "./Inputs/passwordInput";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import EmailInput from './Inputs/emailInput';
import { useContext, useState} from 'react';
import { UserContext } from '../../Context/User';
import { browserLocalPersistence, onAuthStateChanged, setPersistence, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase-config';

export default function Forms() {

	const navigate = useNavigate();
	const { setUser, email, password, setEmail, setPassword, setError, error } = useContext(UserContext);

    async function login() {
        setPersistence(auth, browserLocalPersistence).then(async ()=> {
            try {
                const user =  await signInWithEmailAndPassword(auth, email, password);
                setEmail('');
                setPassword('');
                console.log(user);
                navigate('/home');
				setError(false);
            } catch (error) {
                setError(true);
            }
        })
    }

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })


	return (
		<>
		<div className={styles.containerMain}>
			<div className={styles.containerForm}>

				<div className={styles.titleContainer}>
					<h3 className={styles.containerTitle}>Olá,</h3>
					<p className={styles.containerText}>Para continuar navegando de forma segura, efetue o login na rede.</p>
				</div>

				<form action="" className={styles.form}>
					<p>Login</p>
					<EmailInput/>
					<PasswordInput/>

					<div className={classNames({
						[styles.errorContainer]: true,
						[styles.errorContainer__active]: error
						})}>
						<span>
							Ops, usuário ou senha inválidos.
							<br />
							Tente novamente!
						</span>
					</div>

					<div className={styles.containerButton}>
						<button 
							className={styles.Button}
							onClick={(event)=> {
								event.preventDefault();
								login();
							}}
							>Continuar</button>
					</div>
				</form>
				<div className={styles.footerText}>
					<h5>Não possui uma conta? <a href="/create"> Registre-se aqui!</a></h5>
				</div>
			</div>
		</div>
		</>
	);
}