import { useEffect, useState } from "react"

const useLocalStorage = (key, intialValue) => {
    const [value, setValue]=useState(()=>{
        try
        {
            const localValue=window.localStorage.getItem(key);
            return localValue?JSON.parse(localValue):intialValue;
        }
        catch(err)
        {
            console.log(err);
            return intialValue;
        }
    })

    useEffect(()=> {
        window.localStorage.setItem(key, JSON.stringify(value))
    }, [key,value])

    return [value, setValue];
  
}

export default useLocalStorage