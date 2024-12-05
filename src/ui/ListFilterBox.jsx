

function ListFilterBox({list,placeholder,onSelection,resultsCount}) {


    return (
        <>
        <span>{resultsCount}</span>
        <select onChange={(e) => onSelection(e.target.value)}>
            <option value="" >{placeholder}</option>
            {list.map((level)=><option value={level} key={level} >
                {level}
            </option>)}

        </select>
        </>
    )
}

export default ListFilterBox
