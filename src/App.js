import React, {useState, createContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';
import './App.scss';
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';
import TopNav from "./components/partial/topNav";
import Home from "./components/view/home/home";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import GuWoman from "./components/view/gu/guWoman";
import GuMan from "./components/view/gu/guMan";
import UniqloMan from "./components/view/uniqlo/uniqloMan";
import UniqloWoman from "./components/view/uniqlo/uniqloWoman";
import useWindowSize from "./useWindowSize";
import DeviceContext from "./DeviceContext";

const App = () => {
    const device = useWindowSize();
    if (device == "tablet") {
        return (
            <DeviceContext.Provider value={device}>
                <BrowserRouter>
                    <div className="view">

                        <header>
                            <TopNav/>
                        </header>

                        <main>
                            <Row>
                                <Col/>
                                <Col xs={8}>
                                    <Switch>
                                        <Redirect exact from="/" to="/home"/>
                                        <Route path="/home" component={Home}></Route>
                                        <Route path="/gu/man" component={GuMan}></Route>
                                        <Route path="/gu/woman" component={GuWoman}></Route>
                                        <Route path="/uniqlo/man" component={UniqloMan}></Route>
                                        <Route path="/uniqlo/woman" component={UniqloWoman}></Route>
                                    </Switch>
                                </Col>
                                <Col/>
                            </Row>
                        </main>
                    </div>
                </BrowserRouter>
            </DeviceContext.Provider>
        );
    } else {
        return (
            <DeviceContext.Provider value={device}>
                <BrowserRouter>
                    <div className="view">

                        <header>
                            <TopNav/>
                        </header>

                        <main>
                            <Row>
                                <Col xs={1}/>
                                <Col xs={10}>
                                    <Switch>
                                        <Route path="/home" component={Home}></Route>
                                        <Route path="/gu/man" component={GuMan}></Route>
                                        <Route path="/gu/woman" component={GuWoman}></Route>
                                        <Route path="/uniqlo/man" component={UniqloMan}></Route>
                                        <Route path="/uniqlo/woman" component={UniqloWoman}></Route>
                                    </Switch>
                                </Col>
                                <Col xs={1}/>
                            </Row>
                        </main>
                    </div>
                </BrowserRouter>
            </DeviceContext.Provider>
        );
    }
}
export default App;
