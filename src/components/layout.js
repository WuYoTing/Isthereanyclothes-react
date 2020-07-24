import React, {useState} from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Layout = () => {
    const [search, setSearch] = useState('');
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">標題ICON</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">特價</Nav.Link>
                <Nav.Link href="#pricing">限時特價</Nav.Link>
                <Nav.Link href="#pricing">App會員/網路限定</Nav.Link>
                <Nav.Link href="#pricing">新品</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    );
}
export default Layout;

