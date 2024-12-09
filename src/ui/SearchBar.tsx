
import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { filterListDTO } from "../hooks/useFilterList"


interface SearchBarProps{
    filterKey: string,
    query: string| undefined,
    onSearch: (filter:filterListDTO)=> void,
}


function SearchBar({onSearch, query, filterKey}: SearchBarProps) {
    const [inputVal, setInputVal] = useState(query)
    useDebounce(inputVal, 2000, handleOnChange)
    
    
    function handleOnChange(value: string) {
        onSearch({[filterKey]: value})
    }
    return (

        <div className="flex items-center">
            <input
               onChange={(e)=>setInputVal(e.target.value)}
               value={inputVal}
               className="rounded-lg text-black focus:outline-none px-6 border border-teal-700 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
               type="text"  
               placeholder="Search by Course Name..."/>
        </div>
    )
}

export default SearchBar;


