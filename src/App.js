import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

    const [time, setTime] = useState(0)
    const [timerOn, setTimerOn] = useState(false)

    useEffect(()=>{

        let interval = null

        if(timerOn){
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10);
        }else{
            clearInterval(interval)
        }

        return ()=> clearInterval(interval)

    },[timerOn])

    return (
        <div className="App">

            <div className="timer">
                <div className="nums">
                {('0' + Math.floor((time/60000)%60)).slice(-2) + ':'}
                {('0' + Math.floor((time/1000)%60)).slice(-2) + ':'}
                {('0' + ((time/10)%100)).slice(-2)}
                </div>
                {!timerOn && time === 0 &&(

                    <button className="MyButton" onClick={()=>setTimerOn(true)}>start</button>
                )}

                {timerOn && (
                    
                    <button className="MyButton" onClick={()=>setTimerOn(false)}>stop</button>
                )}

                {!timerOn && time !== 0 && (
                    

                    <button className="MyButton" onClick={()=>setTimerOn(true)}>resume</button>
                    
                )}

                {!timerOn && time >0 &&(

                    <button className="MyButton" onClick={()=>setTime(0)}>reset</button>

                )} 

            </div>
        </div>
    );
}

export default App;
