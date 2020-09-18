import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import Badge from "react-bootstrap/Badge";

const Category = (props) => {
    return (
        <div>
            {props.category ? <Badge pill variant="secondary">{props.category}</Badge> : <div></div>}
        </div>
    );
}

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

const PriceRange = (props) => {
    if (props.highestPrice == props.lowestPrice) {
        return (
            <Fragment>
                ${props.lowestPrice}
            </Fragment>
        );
    } else {
        return (
            <Fragment>
                ${props.highestPrice}
                <span>⇢ ${props.lowestPrice}</span>
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
                        <PriceRange highestPrice={clothes.highestPrice} lowestPrice={clothes.lowestPrice}/>
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