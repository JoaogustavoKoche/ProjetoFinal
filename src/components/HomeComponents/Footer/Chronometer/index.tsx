import React from 'react';
import styles from './Chrono.module.scss';


export default function Chrono() {

    const [counter, setCounter] = React.useState(60);
    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        if(counter === 0 ){
            setCounter(counter + 60)
        }
    }, [counter]);

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