import React, {Fragment, useContext, useEffect, useState} from "react";
import DeviceContext from "../../../../DeviceContext";
import {useParams} from "react-router-dom";
import {apiGuSearch} from "../../../../api/guApi";
import {apiUniqloSearch} from "../../../../api/uniqloApi";
import GoodsInfo from "../goodsInfo/goodsInfo";
import Jumbotron from "react-bootstrap/Jumbotron";
import Spinner from "react-bootstrap/Spinner";

const Goods = () => {
    let params = useParams();
    const device = useContext(DeviceContext);
    const [data, setData] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);


    useEffect(() => {
        const axiosData = async () => {
            setIsError(false);
            try {
                if (params.brand === 'gu') {
                    const result = await apiGuSearch(params.prodNumber);
                    setData(result.data);
                } else if (params.brand === 'uniqlo') {
                    const result = await apiUniqloSearch(params.prodNumber);
                    setData(result.data);
                }
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };
        axiosData();
    }, []);

    if (device === "laptop") {
        if (data != '' && "goodsInfo" in data) {
            return (
                <Fragment>
                    <div className="text-center">
                        <GoodsInfo goodsInfo={data.goodsInfo} isLoading={isLoading} isError={isError}
                                   brand={params.brand}/>
                    </div>
                </Fragment>
            )
        } else if (data != '' && data['Error']) {
            return (
                <Fragment>
                    <div className="text-center mt-5">
                        <Jumbotron>
                            <h1>{data.Error.responseErroInfo.message.message}</h1>
                        </Jumbotron>
                    </div>
                </Fragment>
            )
        } else if (data == '' && isLoading) {
            return (
                <Fragment>
                    <div className="text-center mt-5">
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>
                </Fragment>
            )
        } else if (isError) {
            return (
                <Fragment>
                    <div className="text-center mt-5">
                        <Jumbotron>
                            <h1>Network Connection Error</h1>
                        </Jumbotron>
                    </div>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <div className="text-center mt-5">
                        <Jumbotron>
                            <h1>Unknown Error</h1>
                        </Jumbotron>
                    </div>
                </Fragment>
            )
        }
    } else {
        if (data != '' && "goodsInfo" in data) {
            return (
                <Fragment>
                    <div className="text-center mt-5">
                        <GoodsInfo goodsInfo={data.goodsInfo} isLoading={isLoading} isError={isError}
                                   brand={params.brand}/>
                    </div>
                </Fragment>
            )
        } else if (data != '' && data['Error']) {
            return (
                <Fragment>
                    <div className="text-center mt-5">
                        <Jumbotron>
                            <h1>{data.Error.responseErroInfo.message.message}</h1>
                        </Jumbotron>
                    </div>
                </Fragment>
            )
        } else if (data == '' && isLoading) {
            return (
                <Fragment>
                    <div className="text-center mt-5">
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>
                </Fragment>
            )
        } else if (isError) {
            return (
                <Fragment>
                    <div className="text-center mt-5">
                        <Jumbotron>
                            <h1>Network Connection Error</h1>
                        </Jumbotron>
                    </div>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <div className="text-center mt-5">
                        <Jumbotron>
                            <h1>Unknown Error</h1>
                        </Jumbotron>
                    </div>
                </Fragment>
            )
        }
    }
}

export default Goods;