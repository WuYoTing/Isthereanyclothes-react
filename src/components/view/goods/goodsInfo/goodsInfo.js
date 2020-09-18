import React, {Fragment} from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";


const GoodsInfo = (props) => {
    if (props.data != '' && "goodsInfo" in props.data) {
        return (
            <Fragment>
                <Container className="mt-3">
                    <Row>
                        <Image src={props.data.goodsInfo.goods.mainImageUrl} thumbnail/>
                        <div>
                            <h1>{props.data.goodsInfo.goods.name}</h1>
                            {props.data.goodsInfo.goods.category ?
                                <Badge pill variant="secondary">{props.category}</Badge>
                                : <div></div>}
                            <p>商品編號: {props.data.goodsInfo.goods.prodNumber}</p>
                            <p>商品資訊: {props.data.goodsInfo.goods.about}</p>
                            <p>商品材質: {props.data.goodsInfo.goods.material}</p>
                            <p>最高價格: </p>
                            <p>最低價格: {}</p>
                        </div>
                    </Row>
                </Container>
            </Fragment>
        )
    } else if (props.data != '' && props.data['Error']) {
        return (
            <Fragment>
                <Jumbotron>
                    <h1>{props.data.Error.responseErroInfo.message.message}</h1>
                </Jumbotron>
            </Fragment>
        )
    } else if (props.data == '' && props.isLoading) {
        return (
            <Fragment>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </Fragment>
        )
    } else if (props.isError) {
        return (
            <Fragment>
                <Jumbotron>
                    <h1>Network Connection Error</h1>
                </Jumbotron>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <Jumbotron>
                    <h1>Unknown Error</h1>
                </Jumbotron>
            </Fragment>
        )
    }
}

export default GoodsInfo;