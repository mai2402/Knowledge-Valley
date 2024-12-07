


function SearchBar({onSearch,query}) {
    
    return (

        <div className="flex items-center">
            <input
               onChange={(e)=>onSearch(e.target.value)}
               value={query}
               className="rounded-lg text-black px-6 border border-teal-600"
               type="text"  
               placeholder="Search by Course Name..."/>
        </div>
    )
}

export default SearchBar
