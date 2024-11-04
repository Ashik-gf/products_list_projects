import { useEffect, useRef } from "react";


const useDebounce = (callback, delay) => {
    const timeoutRef = useRef(null)
    // for cleanup frequect render 
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, []);

    // varible argument ...arg

    function debounceCallback(...arg) {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        timeoutRef.current = setTimeout(() => {
            callback(...arg)
        }, delay)
    }
    return debounceCallback;
}

export default useDebounce;