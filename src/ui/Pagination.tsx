import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../constants/Constants";


interface PaginationProps {
    count?: number;    
    page?: number;    
    pageCount?: number;
  }

export default function Pagination({count,page,pageCount:numberOfPages}:PaginationProps) {
   const [searchParams,setSearchParams]= useSearchParams()
   const currentPage = page?? 1;


   function nextPage(){
      const next= currentPage === numberOfPages? currentPage : currentPage+1 ;
      searchParams.set("page",next)
      setSearchParams(searchParams);
   }
   function prevPage(){
    const prev = currentPage === 1 ? currentPage : currentPage-1;
    searchParams.set("page",prev)
    setSearchParams(searchParams);
 }
    

  return (
    <div>
        <button className="border border-black" onClick={nextPage} disabled={currentPage === numberOfPages}>
            Next
        </button>
        <p>showing <span>{(currentPage -1)* PAGE_SIZE +1}</span>to {" "} <span>{currentPage*PAGE_SIZE}</span>of <span>{count}</span></p>
        <button className="border border-black" onClick={prevPage} disabled={currentPage===1}>
            Previous
        </button>
    </div>
  )
}
