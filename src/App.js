import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Counter from "./components/Counter";
import Form from './components/Form'

const App = () => {
    const [count, setCount] = useState(50);
    const [formDone, setFormDone] = useState(false);

    return (
        <Router>
            <div className="App">
                <div className="App-header" style={{fontSize: '25px'}}>

                    <div className="App">
                        <p>react router example</p>
                        <ul>
                            <li><Link to="counter">Counter</Link></li>
                            <li><Link to="form">Form</Link></li>
                        </ul>
                        <Switch>
                            <Route path='/counter' component={() => <Counter count={count} setCount={setCount}/>}/>
                            <Route path='/form'
                                   component={() => <Form formDone={formDone} setFormDone={setFormDone}/>}/>
                        </Switch>
                    </div>

                </div>
            </div>
        </Router>
    );
}

export default App;
