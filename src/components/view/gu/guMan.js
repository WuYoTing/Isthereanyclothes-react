import React, {useContext} from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import DeviceContext from "../../../DeviceContext";
import "../card.scss";


const GuMan = () => {
    const device = useContext(DeviceContext);
    if (device == "laptop") {
        return (
            <div className="text-center">
                <h1>GU Man {device}</h1>
                <Tabs defaultActiveKey="pricedown" id="uncontrolled-tab-example">
                    <Tab eventKey="all" title="全部">
                        <div>123</div>
                        <CardColumns>
                            <Card >
                                <Card.Img variant="top"
                                          src="https://im.uniqlo.com/images/tw/gu/pc/goods/312832/item/09_312832.jpg"/>
                                <Card.Body>
                                    <Card.Title>男裝GU DRY彈性V領T恤(短袖)</Card.Title>
                                    <Card.Text>
                                        312832

                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">$100</small>
                                </Card.Footer>
                            </Card>

                            <Card>
                                <Card.Img variant="top"
                                          src="https://im.uniqlo.com/images/tw/gu/pc/goods/312833/item/09_312833.jpg"/>
                                <Card.Body>
                                    <Card.Title>男裝GU DRY網眼V領T恤(短袖)</Card.Title>
                                    <Card.Text>
                                        312833

                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">$100</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top"
                                          src="https://im.uniqlo.com/images/tw/gu/pc/goods/314144/item/09_314144.jpg"/>
                                <Card.Body>
                                    <Card.Title>男裝GU DRY彈性圓領T恤(短袖)</Card.Title>
                                    <Card.Text>
                                        312833

                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">$100</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top"
                                          src="https://im.uniqlo.com/images/tw/gu/pc/goods/317270/item/09_317270.jpg"/>
                                <Card.Body>
                                    <Card.Title>男裝編織腰帶</Card.Title>
                                    <Card.Text>
                                        312833

                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">$190</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top"
                                          src="https://im.uniqlo.com/images/tw/gu/pc/goods/317371/item/69_317371.jpg"/>
                                <Card.Body>
                                    <Card.Title>男裝輕便九分褲</Card.Title>
                                    <Card.Text>
                                        317371
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">$790</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top"
                                          src="https://im.uniqlo.com/images/tw/gu/pc/goods/317405/item/00_317405.jpg"/>
                                <Card.Body>
                                    <Card.Title>男裝GU保暖棉質混紡V領T恤(9分袖)EX+E</Card.Title>
                                    <Card.Text>
                                        317405

                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">$290</small>
                                </Card.Footer>
                            </Card>

                            <Card>
                                <Card.Img variant="top"
                                          src="https://im.uniqlo.com/images/tw/gu/pc/goods/312833/item/09_312833.jpg"/>
                                <Card.Body>
                                    <Card.Title>男裝GU DRY網眼V領T恤(短袖)</Card.Title>
                                    <Card.Text>
                                        312833

                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">$100</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top"
                                          src="https://im.uniqlo.com/images/tw/gu/pc/goods/314144/item/09_314144.jpg"/>
                                <Card.Body>
                                    <Card.Title>男裝GU DRY彈性圓領T恤(短袖)</Card.Title>
                                    <Card.Text>
                                        312833

                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">$100</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top"
                                          src="https://im.uniqlo.com/images/tw/gu/pc/goods/317270/item/09_317270.jpg"/>
                                <Card.Body>
                                    <Card.Title>男裝編織腰帶</Card.Title>
                                    <Card.Text>
                                        312833

                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">$190</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top"
                                          src="https://im.uniqlo.com/images/tw/gu/pc/goods/317371/item/69_317371.jpg"/>
                                <Card.Body>
                                    <Card.Title>男裝輕便九分褲</Card.Title>
                                    <Card.Text>
                                        317371
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">$790</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top"
                                          src="https://im.uniqlo.com/images/tw/gu/pc/goods/317405/item/00_317405.jpg"/>
                                <Card.Body>
                                    <Card.Title>男裝GU保暖棉質混紡V領T恤(9分袖)EX+E</Card.Title>
                                    <Card.Text>
                                        317405

                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">$290</small>
                                </Card.Footer>
                            </Card>
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
                <h1>GU Man {device}</h1>
                <Tabs defaultActiveKey="pricedown" id="uncontrolled-tab-example">
                    <Tab eventKey="all" title="全部">
                        <CardColumns>
                            <Card>
                                <Card.Img variant="top"
                                          src="https://im.uniqlo.com/images/tw/gu/pc/goods/312832/item/09_312832.jpg"/>
                                <Card.Body>
                                    <Card.Title>男裝GU DRY彈性V領T恤(短袖)</Card.Title>
                                    <Card.Text>
                                        312832

                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">$100</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top"
                                          src="https://im.uniqlo.com/images/tw/gu/pc/goods/312833/item/09_312833.jpg"/>
                                <Card.Body>
                                    <Card.Title>男裝GU DRY網眼V領T恤(短袖)</Card.Title>
                                    <Card.Text>
                                        312833

                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">$100</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top"
                                          src="https://im.uniqlo.com/images/tw/gu/pc/goods/314144/item/09_314144.jpg"/>
                                <Card.Body>
                                    <Card.Title>男裝GU DRY彈性圓領T恤(短袖)</Card.Title>
                                    <Card.Text>
                                        312833

                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">$100</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top"
                                          src="https://im.uniqlo.com/images/tw/gu/pc/goods/317270/item/09_317270.jpg"/>
                                <Card.Body>
                                    <Card.Title>男裝編織腰帶</Card.Title>
                                    <Card.Text>
                                        312833

                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">$190</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top"
                                          src="https://im.uniqlo.com/images/tw/gu/pc/goods/317371/item/69_317371.jpg"/>
                                <Card.Body>
                                    <Card.Title>男裝輕便九分褲</Card.Title>
                                    <Card.Text>
                                        317371
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">$790</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top"
                                          src="https://im.uniqlo.com/images/tw/gu/pc/goods/317405/item/00_317405.jpg"/>
                                <Card.Body>
                                    <Card.Title>男裝GU保暖棉質混紡V領T恤(9分袖)EX+E</Card.Title>
                                    <Card.Text>
                                        317405

                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">$290</small>
                                </Card.Footer>
                            </Card>
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


export default GuMan;