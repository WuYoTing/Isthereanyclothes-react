import React, {Redirect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import TopNav from "./components/partial-components/TopNav";
import home from "./components/view-components/home";
import pricedown from "./components/view-components/pricedown/pricedown";
import limitedtime from "./components/view-components/limitedtime/limitedtime";
import onlineonly from "./components/view-components/onlineonly/onlineonly";
import newgood from "./components/view-components/newgood/newgood";
import search from "./components/view-components/search/search";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {AppProvider} from "./AppContext";

const App = () => {
    return (
        <AppProvider>
            <div className="view">
                <header>
                    <div>
                        <span>LOGO區域</span>
                    </div>
                    <TopNav/>
                </header>
                <main>
                    <Row>
                        <Col/>
                        <Col xs={9}>
                            <Switch>
                                <Route path="/home" component={home}></Route>
                                <Route path="/pricedown" component={pricedown}></Route>
                                <Route path="/limitedtime" component={limitedtime}></Route>
                                <Route path="/onlineonly" component={onlineonly}></Route>
                                <Route path="/newgood" component={newgood}></Route>
                                <Route path='/goods/:user' component={search}/>
                            </Switch>
                        </Col>
                        <Col/>
                    </Row>
                </main>
                <footer>
                    <p>This is footz</p>
                </footer>
            </div>
        </AppProvider>
    );
}
export default App;
