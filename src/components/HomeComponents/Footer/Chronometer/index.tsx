/* eslint-disable react-hooks/exhaustive-deps */
import { signOut } from 'firebase/auth';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../../firebase-config';
import { UserContext } from '../../../Context/User';
import styles from './Chrono.module.scss';


export default function Chrono() {

    const navigate = useNavigate();
    const [counter, setCounter] = React.useState(1000);
    const { setEmail, setPassword} = useContext(UserContext);
    
    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);


    async function logOut() {
        await signOut(auth);
        setEmail('');
        setPassword('');
        navigate('/', {replace: true});
    }

    useEffect(()=> {
        if(counter === 0) {
            logOut();
        }
    }, [counter, logOut])



    return(
        <div className={styles.containerCount}>
            <div className={styles.countdownTextRefresh}> Application refresh in</div>
            <div className={styles.countdown}>
                <div className={styles.countdownNumberText}>
                    <div className={styles.countdownNumber}> {counter} </div>
                    <div className={styles.countdownTextSeconds}> seconds </div>
                </div>
            </div>
        </div>
    );
}