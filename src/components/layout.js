import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import React, {useContext} from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import CurrentPage from "../page-content"


const Layout = () => {

    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand to="home" onClick={() => setPage('home')}>標題ICON</Navbar.Brand>
                <Switch>
                    <Route path="/home"></Route>
                    <Route path="/pricedown"></Route>
                    <Route path="/limitedtime"></Route>
                    <Route path="/onlineonly"></Route>
                    <Route path="/newgood"></Route>
                </Switch>
                <Nav className="mr-auto">
                    <Nav.Link href="home" to="home" onClick={() => setPage('home')}>Home</Nav.Link>
                    <Nav.Link href="pricedown" to="pricedown" onClick={() => setPage('pricedown')}>特價</Nav.Link>
                    <Nav.Link href="limitedtime" to="limitedtime"
                              onClick={() => setPage('limitedtime')}>限時特價</Nav.Link>
                    <Nav.Link href="onlineonly" to="onlineonly"
                              onClick={() => setPage('onlineonly')}>App會員/網路限定</Nav.Link>
                    <Nav.Link href="newgoodZ" to="newgood" onClick={() => setPage('newgood')}>新品</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </Router>
    );
}
export default Layout;

