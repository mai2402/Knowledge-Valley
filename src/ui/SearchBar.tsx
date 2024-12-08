import { filterListDTO } from "../hooks/useFilterList"


interface SearchBarProps{
    filterKey: string,
    query: string| undefined,
    onSearch: (filter:filterListDTO)=> void,
}


function SearchBar({onSearch,query,filterKey}: SearchBarProps) {
    
    return (

        <div className="flex items-center">
            <input
               onChange={(e)=>onSearch({[filterKey]: e.target.value})}
               value={query}
               className="rounded-lg text-black px-6 border border-teal-600"
               type="text"  
               placeholder="Search by Course Name..."/>
        </div>
    )
}

export default SearchBar
