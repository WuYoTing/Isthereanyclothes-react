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
    // const {page, setPage} = useContext(CurrentPage);
    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="home" to="home">標題ICON</Navbar.Brand>
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
                <Route exact path="/home" component={home}></Route>
                <Route path="/pricedown" component={pricedown}></Route>
                <Route path="/limitedtime" component={limitedtime}></Route>
                <Route path="/onlineonly" component={onlineonly}></Route>
                <Route path="/newgood" component={newgood}></Route>
            </Switch>
        </Router>
    );
}
export default Layout;

