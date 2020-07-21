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
            <h3 className={'h3'}>count : {props.count}</h3>
            <button onClick={() => props.setCount(props.count - 1)}>+</button>
            <p>count的props被更改了 {changeTime} 次</p>
            {changeTime > 5 ? <h4 className={'tmp2'}>改動太多次了</h4> : null}
            {changeTime > 20 && <h5 className={'tmp1'}>count 刪除中</h5>}
        </div>
    )
}

export default Counter;