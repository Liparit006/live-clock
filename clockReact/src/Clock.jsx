import React,{ useState,useEffect } from "react";

    function Clock() {
        const [time,setTime] = useState(new Date())
        useEffect(()=>{
            const myInterval = setInterval(()=>{
                setTime(new Date())
            },1000)
        },[time])
        const hour = time.getHours() * 30 
        const minute = time.getMinutes() * 6 
        const second = time.getSeconds() * 6 
       
        return(
        <>
            <div className="clock">
                <div className="hour">
                    <div  className="hr" style={{transform : `rotateZ(${hour}deg)`}}></div>
                </div>
                <div className="min">
                    <div className="mn" style={{transform: `rotateZ(${minute}deg)`}} ></div>
                </div>
                <div className="sec">
                    <div className="sc" style={{transform: `rotateZ(${second}deg)`}} ></div>
                </div>
            </div>
            </>
    )
    }
export default Clock