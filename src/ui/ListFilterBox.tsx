

function ListFilterBox({list, placeholder, onSelection, resultsCount}) {


    return (
        <>
        <span>{resultsCount}</span>
        <select onChange={(e) => onSelection(e.target.value)}>
            <option value="" >{placeholder}</option>
            {list.map((option)=><option value={option} key={option} >
                {option}
            </option>)}

        </select>
        </>
    )
}

export default ListFilterBox
