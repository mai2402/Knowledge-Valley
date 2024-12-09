import { useEffect, useRef, useState } from "react"



function useDebounce(value: string = '', delay: number, onDebounceSuccess: (value: string)=> void) {

  const[debounceValue, setDebounceValue] = useState(value);
  const prevValue = useRef('');

    useEffect(()=>{

      const debounceTime = setTimeout(()=>{
        if (value !== prevValue.current) {
          setDebounceValue(value);
          prevValue.current = value ?? '';
          onDebounceSuccess(value)
        }
        }, delay)

      return () => {
        clearTimeout(debounceTime)
      }
    }, [value, delay])
    
  return debounceValue;
  }
export default useDebounce
