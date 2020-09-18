import React, {useContext, useEffect, useState} from "react";
import DeviceContext from "../../../../DeviceContext";
import {useParams} from "react-router-dom";
import {apiGuSearch} from "../../../../api/guApi";
import {apiUniqloSearch} from "../../../../api/uniqloApi";
import GoodsInfo from "../goodsInfo/goodsInfo";

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
        return (
            <div className="text-center">
                <GoodsInfo data={data} isLoading={isLoading} isError={isError} brand={params.brand}/>
            </div>
        )
    } else {
        return (
            <div className="text-center">
                <GoodsInfo data={data} isLoading={isLoading} isError={isError} brand={params.brand}/>
            </div>
        )
    }
}

export default Goods;