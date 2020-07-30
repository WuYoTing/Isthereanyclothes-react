import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
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
            <BrowserRouter>
                <div className="view">

                    <header>
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

                    <footer className="text-center">
                        <p>This is footer</p>
                    </footer>
                </div>
            </BrowserRouter>
        </AppProvider>
    );
}
export default App;
