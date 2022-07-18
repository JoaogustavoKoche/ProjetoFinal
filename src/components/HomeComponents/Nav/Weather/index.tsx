import styles from './Weather.module.scss';
import cloud from '../../../../assets/Cloud.svg';
import { useEffect, useState } from 'react';


export default function Weather() {

    const [city, setCity] = useState<string>();
    const [temp, setTemp] = useState<number>();

    
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition( function(position) {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;        
    
            fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=c5f468c0041f44cb463eca4fb04d0f1f`)
            .then(res => res.json())
            .then(result => {
                const { main, name } = result;
                setCity(`${name} - SC`)
                setTemp(Math.round(main.temp));
            });
        }, locationNotPermitted()
        );
    }, [])

    function locationNotPermitted(): any {
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=Brasilia&units=metric&appid=c5f468c0041f44cb463eca4fb04d0f1f';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            const { main, name } = data;
            setCity(`${name} - DF`);
            setTemp(Math.round(main.temp));
            }
        )
    }

    return(
        <div className={styles.container}>
            <h3>{city}</h3>
            <div className={styles.temp}>
                <img src={cloud} alt="Cloud" />
                <h2>{temp}°</h2>
            </div>
        </div>
    );
}