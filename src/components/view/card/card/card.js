import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Badge from "react-bootstrap/Badge";
import Jumbotron from "react-bootstrap/Jumbotron";
import CardInfo from "../cardInfo/cardInfo";
import './card.scss';


const Card = (props) => {
    if (props.data != '' && props.data['goodsInfo']) {
        return (
            <CardInfo data={props.data} brand={props.brand}/>
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

export default Card;