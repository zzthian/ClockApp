import { useState, useEffect } from 'react';
function SecondClock() {
    const [time, SetTime] = useState(new Date());
    
    function tick() {
        SetTime(new Date());
    }
    useEffect(()=> 
    {   const timerID = setInterval(tick, 1000);
        return function cleanup(){
            clearInterval(timerID);
        }
    }, [])

    return (
        <div>
            the second clock shows 
            <div>
                {time.toLocaleTimeString()}
            </div>
        </div>
    );

}
export default SecondClock;