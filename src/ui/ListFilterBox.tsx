import { filterListDTO } from "../hooks/useFilterList"

interface ListFilterBoxProps {
    list: string[],
    filterKey: string,
    placeholder: string,
    onSelection: (filter:filterListDTO) => void,
  
}

function ListFilterBox({list, placeholder, filterKey, onSelection}: ListFilterBoxProps) {


    return (
        <>
        <select onChange={(e) => onSelection({[filterKey]: e.target.value})}>
            <option value="" >{placeholder}</option>
            {list?.map((option)=><option value={option} key={option} >
                {option}
            </option>)}

        </select>
        </>
    )
}

export default ListFilterBox
