import React, {useContext} from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import CardColumns from "react-bootstrap/CardColumns";
import DeviceContext from "../../../DeviceContext";

const GuWoman = () => {
    const device = useContext(DeviceContext);
    if (device == "laptop") {
        return (
            <div className="text-center">
                <h1>GU Woman {device}</h1>
                <Tabs defaultActiveKey="pricedown" id="uncontrolled-tab-example">
                    <Tab eventKey="all" title="全部">
                        <CardColumns>
                        </CardColumns>
                    </Tab>
                    <Tab eventKey="pricedown" title="特價">
                        <CardColumns>
                        </CardColumns>
                    </Tab>
                    <Tab eventKey="limitedtime" title="限時特價" onClick={() => alert()}>
                        <CardColumns>
                        </CardColumns>
                    </Tab>
                    <Tab eventKey="onlineonly" title="線上APP獨家">
                        <CardColumns>
                        </CardColumns>
                    </Tab>
                    <Tab eventKey="newgood" title="新品">
                        <CardColumns>
                        </CardColumns>
                    </Tab>
                </Tabs>
            </div>
        )
    } else {
        return (
            <div className="text-center">
                <h1>GU Woman {device}</h1>
                <Tabs defaultActiveKey="pricedown" id="uncontrolled-tab-example">
                    <Tab eventKey="all" title="全部">
                        <CardColumns>
                        </CardColumns>
                    </Tab>
                    <Tab eventKey="pricedown" title="特價">
                        <CardColumns>
                        </CardColumns>
                    </Tab>
                    <Tab eventKey="limitedtime" title="限時特價" onClick={() => alert()}>
                        <CardColumns>
                        </CardColumns>
                    </Tab>
                    <Tab eventKey="onlineonly" title="線上APP獨家">
                        <CardColumns>
                        </CardColumns>
                    </Tab>
                    <Tab eventKey="newgood" title="新品">
                        <CardColumns>
                        </CardColumns>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}


export default GuWoman;