import React, {Fragment} from "react";
import Spinner from "react-bootstrap/Spinner";
import Badge from "react-bootstrap/Badge";
import Jumbotron from "react-bootstrap/Jumbotron";
import './renderCard.scss';

const Badges = (props) => {
    return (
        <div>
            {props.priceDown ? <Badge pill variant="primary">特價</Badge> : <div></div>}
            {props.newGood ? <Badge pill variant="Success">新品</Badge> : <div></div>}
            {props.limitedTime ? <Badge pill variant="info">限時特價</Badge> : <div></div>}
            {props.onlineOnly ? <Badge pill variant="dark">線上APP獨家</Badge> : <div></div>}
        </div>
    );
}

const Category = (props) => {
    return (
        <div>
            {props.category ? <Badge pill variant="secondary">{props.category}</Badge> : <div></div>}
        </div>
    );
}


const RenderCard = (props) => {
    if (props.data != '' && props.data['goodsInfo']) {
        return (
            <Fragment>
                <div className="ts doubling link cards four">
                    {props.data.goodsInfo.allProdIndex.map(clothes => (
                        <a className="ts flatted card" href={"/goods/" + clothes.prodNumber}>
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
                                ${clothes.highestPrice}
                                <span>⇢ ${clothes.lowestPrice}</span>
                                <br/>
                                <Badges priceDown={clothes.priceDown} newGood={clothes.newGood}
                                        onlineOnly={clothes.onlineOnly} limitedTime={clothes.limitedTime}/>
                            </div>
                        </a>
                    ))}
                </div>
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