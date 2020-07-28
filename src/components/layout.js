import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import home from './home/home';
import limitedtime from './limitedtime/limitedtime';
import newgood from './newgood/newgood';
import onlineonly from './onlineonly/onlineonly';
import pricedown from './pricedown/pricedown';


const Layout = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">首頁</Link></li>
                    <li><Link to="/limitedtime">限時</Link></li>
                    <li><Link to="/newgood">新品</Link></li>
                    <li><Link to="/onlineonly">線上獨家</Link></li>
                    <li><Link to="/pricedown">特價</Link></li>
                </ul>
                <hr/>
                <Route path="/" component={home}/>
                <Route path="/limitedtime" component={limitedtime}/>
                <Route path="/newgood" component={newgood}/>
                <Route path="/onlineonly" component={onlineonly}/>
                <Route path="/pricedown" component={pricedown}/>
            </div>
        {/*
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand to="home">標題ICON</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="home" to="home">Home</Nav.Link>
                    <Nav.Link href="pricedown" to="pricedown">特價</Nav.Link>
                    <Nav.Link href="limitedtime" to="limitedtime">限時特價</Nav.Link>
                    <Nav.Link href="onlineonly" to="onlineonly">App會員/網路限定</Nav.Link>
                    <Nav.Link href="newgood" to="newgood">新品</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
            <Switch>
                <Route path="/home" component={home}></Route>
                <Route path="/pricedown" component={pricedown}></Route>
                <Route path="/limitedtime" component={limitedtime}></Route>
                <Route path="/onlineonly" component={onlineonly}></Route>
                <Route path="/newgood" component={newgood}></Route>
            </Switch>
        */}
        </Router>
    );
}
export default Layout;

