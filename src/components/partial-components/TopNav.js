import React, { useContext }from 'react';
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import {BrowserRouter as Router, Link} from "react-router-dom";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { AppContext } from "../../AppContext";

const TopNav = () => {
    const context = useContext(AppContext);
    return (
        <div>
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
        </div>
    )
}

export default TopNav;