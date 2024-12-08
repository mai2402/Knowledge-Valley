import { useSearchParams } from "react-router-dom";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";




interface PaginationProps {
    count?: number;    
    page?: number;    
    numberOfPages?: number; 

  }

export default function Pagination({page,numberOfPages}:PaginationProps) {
   const [searchParams,setSearchParams]= useSearchParams()
   
   const currentPage = page?? 1;
  

   // generating an array dynamically based on the number of pages 
    // const generatePagesArray = (n:number):number[]=>{
    //     return Array.from({length:n},(_,i)=>i+1)
    // }
    // const pagesResult = generatePagesArray(numberOfPages)
  

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
    <div className="flex flex-row items-center justify-center space-x-4 p-4  ">
    {/* Previous Button */}
    <button
      
      onClick={prevPage}
      disabled={currentPage === 1}
      className="flex items-center space-x-2 px-4 py-2  hover:text-teal-500"
    >
      <HiChevronDoubleLeft />

    </button>

    {/* Page Info */}
       
       <p className="text-sm font-medium">
        Showing 
        <span className="mx-2">{currentPage}</span> 
        out of 
        <span className="mx-2">{numberOfPages}</span> 
        <span>Pages</span>
        </p>

    {/* Next Button */}
    <button
   
      onClick={nextPage}
      disabled={currentPage === numberOfPages}
      className="flex items-center space-x-2 px-4 py-2 hover:text-teal-500"
    >
      <HiChevronDoubleRight />
      
    </button>
  </div>
  )
}
