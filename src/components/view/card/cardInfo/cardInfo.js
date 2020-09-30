import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./cardInfo.scss";

const Category = (props) => {
    return (
        <div>
            {props.category ? <Badge pill variant="secondary">{props.category}</Badge> : <div></div>}
        </div>
    );
}

const Badges = (props) => {
    return (
        <Row className="justify-content-md-center">
            <Col xs lg="2"></Col>
            <Col md="auto">
                <h5>
                    <Row className="justify-content-md-center">
                        <Col md></Col>
                        <Col md="auto">
                            {props.priceDown ? <Badge pill variant="primary">特價</Badge> : <div></div>}
                            {props.newGood ? <Badge pill variant="Success">新品</Badge> : <div></div>}
                            {props.limitedTime ? <Badge pill variant="info">限時特價</Badge> : <div></div>}
                            {props.onlineOnly ? <Badge pill variant="dark">線上APP獨家</Badge> : <div></div>}
                        </Col>
                        <Col md></Col>
                    </Row>
                </h5>
            </Col>
            <Col xs lg="2"></Col>
        </Row>
    );
}

const PriceRange = (props) => {
    if (props.highestPrice == props.currentPrice) {
        return (
            <Fragment>

                <Row className="justify-content-md-center">
                    <Col xs lg="1"></Col>
                    <Col md="auto">
                        <Row className="justify-content-md-center">
                            <Col xs lg="2"></Col>
                            <Col md="auto">
                                <p className="cardPrice">${props.currentPrice}</p>
                            </Col>
                            <Col xs lg="2"></Col>
                        </Row>
                    </Col>
                    <Col xs lg="1"></Col>
                </Row>
            </Fragment>
        );
    } else {
        return (
            <Fragment>
                <Row className="justify-content-md-center">
                    <Col xs lg="1">
                        <Row className="justify-content-md-center">
                                <s>${props.highestPrice}</s>
                        </Row>
                    </Col>
                    <Col md="auto">
                        <Row className="justify-content-md-center">
                            <Col md></Col>
                            <Col md="auto">
                                <p className="cardPrice">${props.currentPrice}</p>
                            </Col>
                            <Col md></Col>
                        </Row>
                    </Col>
                    <Col xs lg="1"></Col>
                </Row>
            </Fragment>
        );
    }
}

const CardInfo = (props) => {
    return (
        <div className="ts doubling link cards four">
            {props.data.goodsInfo.allProdIndex.map(clothes => (
                <Link className="ts flatted card" to={"/goods/" + props.brand + "/" + clothes.prodNumber}>
                    <div className="image">
                        <img className="card-img-top lazy"
                             src={clothes.mainImageUrl} alt={clothes.name}/>
                    </div>
                    <div className="content">
                        <div className="smaller header">{clothes.name}</div>
                        <div className="middoted">{clothes.prodNumber} <Category category={clothes.category}/>
                        </div>
                    </div>
                    <div className="center aligned extra content">
                        <PriceRange highestPrice={clothes.highestPrice} lowestPrice={clothes.lowestPrice}
                                    currentPrice={clothes.currentPrice}/>
                        <br/>
                        <Badges priceDown={clothes.priceDown} newGood={clothes.newGood}
                                onlineOnly={clothes.onlineOnly} limitedTime={clothes.limitedTime}/>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default CardInfo;