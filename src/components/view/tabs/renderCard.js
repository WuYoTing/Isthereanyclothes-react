import React, {Fragment} from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Jumbotron from "react-bootstrap/Jumbotron";

const RenderCard = (props) => {
    if (props.data != '' && props.data['goodsInfo']) {
        return (
            <Fragment>
                <CardColumns>
                    <ul>
                        {props.data.goodsInfo.allProdIndex.map(clothes => (
                            <a className="card" href={"/goods/" + clothes.prodNumber}>
                                <img className="card-img-top lazy"
                                     src={clothes.mainImageUrl}/>
                                <Card.Body>
                                    <div className="card-title h-100 mh-100">
                                        {clothes.name}
                                    </div>
                                    <Card.Text>
                                        {clothes.prodNumber}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">${clothes.highestPrice} ->
                                        ${clothes.lowestPrice}</small>
                                </Card.Footer>
                            </a>
                        ))}
                    </ul>
                </CardColumns>
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

export default RenderCard;