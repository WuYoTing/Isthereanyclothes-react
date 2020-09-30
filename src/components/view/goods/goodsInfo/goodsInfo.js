import React, {Fragment, useEffect, useState} from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import GoodsChart from "../goodsChart/goodsChart";
import "./goodsInfo.scss";

const GoodsInfo = (props) => {
    const [maxPrice, setMaxPrice] = useState(0);
    const [minPrice, setMixPrice] = useState(0);

    useEffect(() => {
        const getMaxMin = () => {
            const max = Math.max.apply(Math, props.goodsInfo.clothesPriceLogs.map(function (priceLog) {
                return priceLog.price;
            }))
            setMaxPrice(max);
            const min = Math.min.apply(Math, props.goodsInfo.clothesPriceLogs.map(function (priceLog) {
                return priceLog.price;
            }))
            setMixPrice(min);
        }
        getMaxMin();
    }, [props.goodsInfo.clothesPriceLogs]);

    return (
        <Fragment>
            <Container className="mt-3">
                <Row>
                    <Col sm={6}>
                        <h6>
                            <Image src={props.goodsInfo.goods.mainImageUrl} thumbnail/>
                            <Row>
                                <Col>
                                    {props.goodsInfo.goods.category ?
                                        <Badge pill
                                               variant="secondary"> {props.goodsInfo.goods.category}</Badge>
                                        : <div></div>}
                                </Col>
                                <Col>
                                    {props.goodsInfo.goods.priceDown ?
                                        <Badge pill variant="primary">特價</Badge> :
                                        <div></div>}
                                    {props.goodsInfo.goods.newGood ?
                                        <Badge pill variant="Success">新品</Badge> :
                                        <div></div>}
                                    {props.goodsInfo.goods.limitedTime ?
                                        <Badge pill variant="info">限時特價</Badge> :
                                        <div></div>}
                                    {props.goodsInfo.goods.onlineOnly ?
                                        <Badge pill variant="dark">線上APP獨家</Badge> :
                                        <div></div>}
                                </Col>
                            </Row>
                        </h6>

                    </Col>
                    <Col sm={6}>
                        <div>
                            <div>
                                <h1 className="ts dividing big header">
                                    {props.goodsInfo.goods.name}
                                    <div className="ts sub header">
                                        商品編號:{props.goodsInfo.goods.prodNumber}
                                    </div>
                                </h1>
                            </div>
                            <div className="mt-4">
                                <Row className="justify-content-md-center">
                                    <Col xs lg="4">
                                        <div>
                                            <h4>
                                                <div>
                                                    <div className="mt-3">
                                                        <div>目前價格</div>
                                                        <div>
                                                            {props.goodsInfo.goods.currentPrice ?
                                                                <p>{props.goodsInfo.goods.currentPrice}</p> :
                                                                <div>----</div>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </h4>
                                        </div>
                                    </Col>
                                    <Col xs lg="4">
                                        <div>
                                            <div>
                                                <div>
                                                    <div>最高價格</div>
                                                    <div>{maxPrice ? <p>{maxPrice}</p> : <p>----</p>}</div>
                                                </div>
                                                <div>
                                                    <div>最低價格</div>
                                                    <div>{minPrice ? <p>{minPrice}</p> : <p>----</p>}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="mt-4">
                                <GoodsChart clothesPriceLogs={props.goodsInfo.clothesPriceLogs}
                                            currentPrice = {props.goodsInfo.goods.currentPrice}/>
                            </div>
                            <div className="mt-4">
                                <Accordion>
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                商品材質
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                {props.goodsInfo.goods.material ?
                                                    <p>{props.goodsInfo.goods.material}</p> :
                                                    <div></div>}
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                                商品資訊
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                {props.goodsInfo.goods.about ?
                                                    <p>{props.goodsInfo.goods.about}</p> : <div></div>}
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="mt-3">
                                {props.goodsInfo.goods.sizeUrl ?
                                    <div className="btn btn-secondary btn-block btn-lg">
                                        <a href={props.goodsInfo.goods.url} target="_blank" r>商品網站</a>
                                    </div>
                                    : <div></div>}
                                {props.goodsInfo.goods.sizeUrl ?
                                    <div className="btn btn-secondary btn-block btn-lg">
                                        <a href={props.goodsInfo.goods.sizeUrl} target="_blank" r>商品尺寸表</a>
                                    </div>
                                    : <div></div>}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default GoodsInfo;