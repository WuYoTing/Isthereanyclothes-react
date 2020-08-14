import {useState, useEffect} from "react";

function getBreakPoint(windowWidth) {
    if (windowWidth) {
        if (windowWidth < 600) {
            return "mobile";
        } else if (windowWidth < 1200 & windowWidth >= 600) {
            return "tablet";
        } else if (windowWidth > 1200) {
            return "laptop";
        }
    } else {
        return undefined;
    }
}

function useWindowSize() {
    const isWindowClient = typeof window === "object";

    const [windowSize, setWindowSize] = useState(
        isWindowClient ? getBreakPoint(window.innerWidth) : undefined
    );

    useEffect(() => {
        //a handler which will be called on change of the screen resize
        function setSize() {
            setWindowSize(getBreakPoint(window.innerWidth));
        }

        if (isWindowClient) {
            //register the window resize listener
            window.addEventListener("resize", setSize);

            //unregister the listerner
            return () => window.removeEventListener("resize", setSize);
        }
    }, [isWindowClient, setWindowSize]);

    return windowSize;
}

export default useWindowSize;