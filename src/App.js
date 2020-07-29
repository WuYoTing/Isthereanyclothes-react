import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import home from "./components/home/home";
import pricedown from "./components/pricedown/pricedown";
import limitedtime from "./components/limitedtime/limitedtime";
import onlineonly from "./components/onlineonly/onlineonly";
import newgood from "./components/newgood/newgood";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const App = () => {
    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <Col/>
                <Col xs={9}>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/home" className="navbar-brand">標題ICON</Link>
                            <Link to="/home" className="nav-link">首頁</Link>
                            <Link to="/limitedtime" className="nav-link">限時</Link>
                            <Link to="/newgood" className="nav-link">新品</Link>
                            <Link to="/onlineonly" className="nav-link">線上獨家</Link>
                            <Link to="/pricedown" className="nav-link">特價</Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Col>
                <Col/>
            </Navbar>
            <Row>
                <Col/>
                <Col xs={9}>
                    <Switch>
                        <Route path="/home" component={home}></Route>
                        <Route path="/pricedown" component={pricedown}></Route>
                        <Route path="/limitedtime" component={limitedtime}></Route>
                        <Route path="/onlineonly" component={onlineonly}></Route>
                        <Route path="/newgood" component={newgood}></Route>
                    </Switch>
                </Col>
                <Col/>
            </Row>
        </Router>
    );
}
export default App;
