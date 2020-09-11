import React, {useEffect, useState} from "react";
import RenderCard from "./renderCard";

const TabNewgood = (props) => {
    const [data, setData] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const axiosData = async () => {
            setIsError(false);
            try {
                const result = await props.axios();
                setData(result.data);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };
        axiosData();
    }, []);

    return (
        <div>
            <hr/>
            <RenderCard data={data} isLoading={isLoading}/>
        </div>
    )
}

export default TabNewgood;