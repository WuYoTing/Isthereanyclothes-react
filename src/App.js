import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter";

function App() {
    const [count, setCount] = useState(30);
    return (
        <div className="App">
            <div className="App-header" style={{fontSize: '100px'}}>
                Hello World
                <Counter count={count} setCount={setCount}/>
            </div>
        </div>
    );
}

export default App;
