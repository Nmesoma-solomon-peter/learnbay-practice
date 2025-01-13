import React, { useContext, useEffect, useState } from 'react'
import { myBasket } from './App';

function Timer(props) {
    const [minutes, setMinutes] = useState(10);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {

        let timeCountDown = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                setSeconds(59);
                if (minutes > 0) {
                    setMinutes(minutes - 1);
                }
            }
           
        }, 1000);
        if(minutes == 0 && seconds == 0){
            clearInterval(timeCountDown);
            props.stage("result");
        }
        return () => clearInterval(timeCountDown);
    }, [minutes, seconds])

    const formatTime = (value) => (value < 10 ? `0${value}` : value);

    return (
        <div>
            {formatTime(minutes)}:{formatTime(seconds)}
        </div>
    )
}

export default Timer