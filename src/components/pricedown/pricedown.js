import React from "react"
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Pricedown extends React.Component {
    render() {
        return (
           <>
               <Col />
            <Col xs={10}>
                <Row>
                    <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                        <Tab eventKey="home" title="Home">

                        </Tab>
                        <Tab eventKey="profile" title="Profile">

                        </Tab>
                        <Tab eventKey="contact" title="Contact" disabled>
                            456456
                        </Tab>
                    </Tabs>
                </Row>
            </Col>
               <Col />
           </>
        )
    }
}

export default Pricedown;