import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import './scss/style.scss';
import Counter from "./components/Counter";
import Form from "./components/Form";

const App = () => {
    const [count, setCount] = useState(0);
    const [formdone, setFormdone] = useState(false)
    return (
        <Router>
            <div className="App">
                <div className="App-header">
                    <p className="hello">react router example</p>
                    <ul>
                        <li><Link to="counter">計數器</Link></li>
                        <li><Link to="Form">Email</Link></li>
                    </ul>
                    <switch>
                        <Route path='/counter' component={() => <Counter count={count} setCount={setCount}/>}/>
                        <Route path='/form' component={() => <Form formdone={formdone} setFormdone={setFormdone}/>}/>
                    </switch>
                    {formdone ? <p>表單填寫完成</p> : null}
                </div>
            </div>
        </Router>
    );
}
export default App;
