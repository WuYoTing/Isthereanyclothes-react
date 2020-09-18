import React, {useContext} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {Link} from "react-router-dom";
import DeviceContext from "../../../DeviceContext";
import './topNav.scss';

const TopNav = () => {
    const device = useContext(DeviceContext);
    if (device === "laptop") {
        return (
            <div className="main-color">
                <Navbar>
                    <Col/>
                    <Col xs={8}>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Link to="/home" class="navbar-brand">isthereanyclothes</Link>
                            <Nav className="mr-auto">
                                <Link to="/home" className="nav-link" bsPrefix>HOME</Link>
                                <NavDropdown title="GU " id="nav-dropdown">
                                    <Link to="/gu/man" className="dropdown-item" bsPrefix>男裝</Link>
                                    <Link to="/gu/woman" className="dropdown-item" bsPrefix>女裝</Link>
                                </NavDropdown>
                                <NavDropdown title="UNIQLO " id="nav-dropdown">
                                    <Link to="/uniqlo/man" className="dropdown-item" bsPrefix>男裝</Link>
                                    <Link to="/uniqlo/woman" className="dropdown-item" bsPrefix>女裝</Link>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                    <Col/>
                </Navbar>
            </div>
        )
    } else {
        return (
            <div className="main-color">
                <Navbar collapseOnSelectv expand="lg">
                    <Link to="/home" class="navbar-brand">isthereanyclothes</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/home" className="nav-link" bsPrefix>HOME</Link>
                            <NavDropdown title="GU " id="nav-dropdown">
                                <Link to="/gu/man" className="dropdown-item" bsPrefix>男裝</Link>
                                <Link to="/gu/woman" className="dropdown-item" bsPrefix>女裝</Link>
                            </NavDropdown>
                            <NavDropdown title="UNIQLO " id="nav-dropdown">
                                <Link to="/uniqlo/man" className="dropdown-item" bsPrefix>男裝</Link>
                                <Link to="/uniqlo/woman" className="dropdown-item" bsPrefix>女裝</Link>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default TopNav;