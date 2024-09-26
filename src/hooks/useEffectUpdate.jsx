import {useEffect, useRef} from "react";

const useEffectUpdate = (callback) => {
    const isFirstRender = useRef(true);
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        callback();
    }, [callback]);
}

export default useEffectUpdate