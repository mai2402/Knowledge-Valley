
import { filterListDTO } from "../hooks/useFilterList"

interface ListFilterBoxProps {
    list: string[],
    filterKey: string,
    placeholder: string,
    onSelection: (filter:filterListDTO) => void,
  
  
}

function ListFilterBox({list, placeholder, filterKey, onSelection}: ListFilterBoxProps) {


    return (
        
    <div className="flex items-center justify-end space-x-1 mx-2 ">

     <select 
            onChange={(e) => onSelection({ [filterKey]: e.target.value })}
            className=" border border-teal-600 rounded-md  text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 p-2 w-full max-w-xs"
            >
            <option  value="" className="text-gray-500">{placeholder}</option>
            {list?.map((option) => (
                <option value={option} key={option} className="hover:bg-gray-100">
            {option}
            </option>
            ))}
     </select>

  </div>
       
    )
}

export default ListFilterBox
