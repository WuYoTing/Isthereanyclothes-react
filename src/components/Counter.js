import React, {useState, useEffect} from 'react';
import '../scss/style.scss';

const Counter = (props) => {
    const [changeTime, setChangetime] = useState(0);
    useEffect(() => {
        props.setCount(100);
        console.log('test1');
    }, [])
    useEffect(() => {
        setChangetime(changeTime + 1);
        console.log('test2');
    }, [props.count])
    return (
        <div>
            <h3>count : {props.count}</h3>
            <button onClick={() => props.setCount(props.count - 1)}>+</button>
            <p>count的props被更改了 {changeTime} 次</p>
        </div>
    )
}

export default Counter;