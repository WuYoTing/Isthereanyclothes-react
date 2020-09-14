import React, {useEffect, useState} from "react";
import RenderCard from "./renderCard";
import useLazyLoad from "../../../custom/useLazyLoad";

const TabNewgood = (props) => {
    const [data, setData] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [observer, setElements, entries] = useLazyLoad({
        threshold: 0.25,
        root: null
    })

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

    useEffect(() => {
        if (data.length) {
            alert("getElementsByClassName LAZY");
            let img = Array.from(document.getElementsByClassName('lazy'));
            setElements(img)
        }
    }, [data, setElements])

    useEffect(() => {
        entries.forEach(entry => {
            alert("unIntersecting");
            if (entry.isIntersecting) {
                alert("isIntersecting");
                let lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                alert(lazyImage.dataset.src);
                lazyImage.classList.remove("lazy");
                observer.unobserve(lazyImage);
            }
        })
    }, [entries, observer])

    return (
        <div>
            <hr/>
            <RenderCard data={data} isLoading={isLoading} isError={isError}/>
        </div>
    )
}

export default TabNewgood;
