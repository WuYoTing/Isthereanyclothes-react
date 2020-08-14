import React, {Component, useContext} from "react"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DeviceContext from "../../../DeviceContext";

const Home = () => {
    const device = useContext(DeviceContext);
    if(device == "laptop"){
        return (
            <Form className="text-center">
                <Form.Group>
                    <h1>主頁搜尋 {device}</h1>
                    <Form.Control type="text" placeholder="請輸入關鍵字"/>
                </Form.Group>
                <Button variant="secondary">送出</Button>{' '}
            </Form>
        )
    }else{
        return (
            <Form className="text-center">
                <Form.Group>
                    <h1>主頁搜尋 {device}</h1>
                    <Form.Control type="text" placeholder="請輸入關鍵字"/>
                </Form.Group>
                <Button variant="secondary">送出</Button>{' '}
            </Form>
        )
    }
}

export default Home;