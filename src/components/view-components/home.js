import React, { Component } from "react"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Home extends React.Component {
    render() {
        return (
            <Form>
                <Form.Group>
                    <h1>主頁搜尋</h1>
                    <Form.Control type="text" placeholder="請輸入關鍵字" />
                </Form.Group>
                <Button variant="secondary">送出</Button>{' '}
            </Form>
        )
    }
}

export default Home;