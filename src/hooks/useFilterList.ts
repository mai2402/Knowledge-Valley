import {useState } from "react";
import { CourseSchema } from "../types/CourseSchema";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCourses } from "../api/coursesApi";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../constants/Constants";


export interface filterListDTO{
  level?:string,
  category?: string,
  searchQuery?: string,
  page?: number,
}
 export interface dataProps {
  courses: CourseSchema[],
   count: number,
}


function useFilterList() {
  const queryClient = useQueryClient()
  const [searchParams] = useSearchParams()
  const [coursesFilters, setFilteredCourses]= useState<filterListDTO>({
    level:"",
    category:"",
    searchQuery:"",
  
  })
  // Pagination

      const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"))  ;

  // filtering 

      const updatedFilteredCourses= (newFilters:filterListDTO) => {
      setFilteredCourses((prev) => ({ ...prev, ...newFilters }));
    };
    
  const {
        data = { courses: [], count: 0 },
        isLoading,
        error
        }= useQuery<dataProps| null>({
        queryKey: ["courses",coursesFilters,page],
        queryFn:()=>getCourses(page,coursesFilters),
    
})
          const courses= data?.courses;
          const count= data?.count || 0;

// next page 
 
const pageCount = Math.ceil(count/PAGE_SIZE)

if (page<pageCount){
  queryClient.prefetchQuery({
    queryKey:["courses",coursesFilters,page],
    queryFn:()=>getCourses((page ?? 0) + 1,coursesFilters),
  })
}

// prev page 

if (page >1){
  queryClient.prefetchQuery({
    queryKey:["courses",coursesFilters,page],
    queryFn:()=>getCourses((page ?? 0)-1,coursesFilters),
  })

}

       
     
  return{courses,isLoading,error,updatedFilteredCourses,coursesFilters,count,page,pageCount}

}

export default useFilterList
    
    // const totalResults = filteredCourses.length;

    // function handleFilteredCourses (level:string,category:string,searchedQuery:string){
    //     // initial value if no filter applied
    //     let formattedCourses = courses;

    //     // filter by name 
    //     if(searchedQuery){
    //         formattedCourses = 
    //     }
    //     // filter by level
    //     if (level){
    //       formattedCourses = formattedCourses.filter((course)=>course.level === level)
    //     }
    //     // filter by category
    //     if (category){
    //       formattedCourses = formattedCourses.filter((course)=>course.category === category)
    //     }
  
    //    // updating the state after applying all or some of the  filters 
    //    setFilteredCourses(formattedCourses)
  
    //   }

    //   // updating state setter functions 
    //   function handleSearchQuery(searchQuery:string){
    //         setSearchQuery(searchQuery)
    //   }
  
    //  function handleFilteredByCategory(filteredByCategory:string){
    //     setFilteredByCategory(filteredByCategory)  
    //  }
  
    //   function handleFilteredByLevel(filteredByLevel:string){
    //     setFilteredByLevel(filteredByLevel)
    //   }

    //   // effect runs whenever any of the filters values change
    //   useEffect(()=>{
       
    //     handleFilteredCourses(filteredByLevel, filteredByCategory, searchQuery)
    //   },[searchQuery, filteredByCategory, filteredByLevel])

    // return {
    //   handleFilteredByCategory,
    //   handleFilteredByLevel,
    //   handleSearchQuery,
    //   totalResults,
    //   filteredCourses,
    //   searchQuery
    // }

