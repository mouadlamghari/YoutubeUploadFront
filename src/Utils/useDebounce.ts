import { useRef } from "react";



const useDebounce = (callback:CallableFunction,delay:number=1000) => {
    let timer = useRef();
    return (...args)=>{
        clearTimeout(timer.current)
        timer.current = setTimeout(()=>{
            callback(...args)
        },delay)
    }
}

export default useDebounce