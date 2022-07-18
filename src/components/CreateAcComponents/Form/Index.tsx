import EmailInput from "./Inputs/emailInput";
import styles from './Forms.module.scss';
import PasswordInput from "./Inputs/passwordInput";
import classNames from "classnames";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function FormsCreate() {

	const navigate = useNavigate();
	const [errorActive, setErrorActive] = useState(false);
	
	function validateForm(event: { preventDefault: () => void; }) {
		let inputs = document.querySelectorAll("input");
		/* let valid = true; */
		inputs.forEach(input => {
			if(input.value === "") {
				/* valid = false; */
				input.style.border = "1px solid #E9B425";
				setErrorActive(true);
				event?.preventDefault()
			}else{
				redirectToHome()
			}
		});
	}

	function redirectToHome() {
		navigate("/");
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
					<p>Cadastro</p>
					<EmailInput/>
					<PasswordInput/>

					<div className={classNames({
						[styles.errorContainer]: true,
						[styles.errorContainer__active]: errorActive
						})}>
						<span>
							Ops, usuário ou senha inválidos.
							<br />
							Tente novamente!
						</span>
					</div>

					<div className={styles.containerButton}>
						<button className={styles.Button}
								onClick={validateForm}
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