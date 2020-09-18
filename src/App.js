import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {BrowserRouter, Route, Switch, Redirect, useParams} from 'react-router-dom';
import TopNav from "./components/partial/topNav/topNav";
import Home from "./components/view/home/home";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Gu from "./components/view/gu/gu";
import Uniqlo from "./components/view/uniqlo/uniqlo";
import useWindowSize from "./custom/useWindowSize";
import DeviceContext from "./DeviceContext";
import Goods from "./components/view/goods/goods/goods";



const App = () => {
    const device = useWindowSize();
    if (device == "laptop") {
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
                                        <Route exact path="/">
                                            <Redirect to="/home"/>
                                        </Route>
                                        <Route path="/home" component={Home}></Route>
                                        <Route path="/gu/man" component={() => (<Gu sex="man"/>)}></Route>
                                        <Route path="/gu/woman" component={() => (<Gu sex="woman"/>)}></Route>
                                        <Route path="/uniqlo/man" component={() => (<Uniqlo sex="man"/>)}></Route>
                                        <Route path="/uniqlo/woman"
                                               component={() => (<Uniqlo sex="woman"/>)}></Route>
                                        <Route path="/goods/:brand/:prodNumber" component={Goods}></Route>
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
                                        <Route exact path="/">
                                            <Redirect to="/home"/>
                                        </Route>
                                        <Route path="/home" component={Home}></Route>
                                        <Route path="/gu/man" component={() => (<Gu sex="man"/>)}></Route>
                                        <Route path="/gu/woman" component={() => (<Gu sex="woman"/>)}></Route>
                                        <Route path="/uniqlo/man" component={() => (<Uniqlo sex="man"/>)}></Route>
                                        <Route path="/uniqlo/woman"
                                               component={() => (<Uniqlo sex="woman"/>)}></Route>
                                        <Route path="/goods/:brand/:prodNumber" component={Goods}></Route>
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
