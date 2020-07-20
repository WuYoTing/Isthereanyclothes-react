import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter";

const App = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="App">
            <div className="App-header" style={{fontSize: '25px'}}>
                <Counter count={count} setCount={setCount}/>
            </div>
        </div>
    );
}

export default App;
