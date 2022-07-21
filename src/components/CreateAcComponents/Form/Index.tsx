/* eslint-disable @typescript-eslint/no-unused-vars */
import EmailInput from "./Inputs/emailInput";
import styles from './Forms.module.scss';
import PasswordInput from "./Inputs/passwordInput";
import classNames from "classnames";
import { auth } from "../../../firebase-config";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "../../Context/User";



export default function FormsCreate() {

	const navigate = useNavigate();
	const { validEmail, validPassword, errorAc, setErrorAc } = useContext(UserContext);
	const [error, setError] = useState(false);

	function navigateLogin() {
		navigate("/");
	}

	function validate(event: { preventDefault: () => void; }) {
		
		event.preventDefault()
		let notEmpty = true;
		const userInput = (document.getElementById('email') as HTMLInputElement).value
		const passwordInput = (document.getElementById('password') as HTMLInputElement).value

		if(userInput === '' || passwordInput === ''){
			notEmpty = false;
			
		}
		
		if(!validEmail || !validPassword || !notEmpty){
			setError(true);
			setErrorAc(true);
			return false;
		}else{
			setError(false);
			setErrorAc(false);
		}


		const register = async () => {
			try {
				const user = await createUserWithEmailAndPassword(
					auth,
					userInput,
					passwordInput
				);
			navigateLogin();
			setErrorAc(false)
			setError(false);
			} catch (error) {
			console.log(error);
			setErrorAc(true)
			}
		};
		register();
	}
	
	return (
		<>
		<div className={styles.containerMain}>
			<div className={styles.containerForm}>

				<div className={styles.titleContainer}>
					<h3 className={styles.containerTitle}>Olá,</h3>
					<p className={styles.containerText}>Para começar a navegar de forma segura, efetue o cadastro na rede.</p>
				</div>

				<form action="" className={styles.form}>
					<p className={styles.titleCas}>Cadastro</p>
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
						<button className={styles.Button}
						onClick={validate}
						>Continuar</button>
					</div>
				</form>
				<div className={styles.footerText}>
					<h5>Ja possui uma conta? <a href="/"> Faça o login aqui!</a></h5>
				</div>
			</div>
		</div>
		</>
	);
}
