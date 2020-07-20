import React, {useState} from 'react'

const Counter = (props) => {

    return (
        <div>
            <p>count : {props.count}</p>
            <button onClick={() => props.setCount(props.count - 1)}>+</button>
        </div>
    )
}

export default Counter;