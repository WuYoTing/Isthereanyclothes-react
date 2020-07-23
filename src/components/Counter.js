import React, {useEffect, useState} from "react";

const Counter = (props) => {
    const [changetime, setChangetime] = useState(0);

    useEffect(() => {
        setChangetime(changetime + 1);
    }, [props.count])
    return (
        <div>
            <p className="count">count: {props.count}</p>
            <button className="btn" onClick={() => props.setCount(props.count + 1)}>+</button>
            <p className="changetime">setchangetime被call了 {changetime} 次</p>
            {changetime > 7 ? <p>已改動{changetime}次</p> : null}
            {props.count < 5 && <p>請繼續點擊</p>}
        </div>
    )
}
export default Counter;