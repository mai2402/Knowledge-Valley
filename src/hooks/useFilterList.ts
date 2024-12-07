import { useEffect, useState } from "react";


function useFilterList(courses) {
    const [filteredCourses, setFilteredCourses]= useState(courses)
    const [filteredByLevel, setFilteredByLevel]= useState("")
    const [filteredByCategory,setFilteredByCategory] = useState("")
    const [searchQuery,setSearchQuery]=useState("")
    
    const totalResults = filteredCourses.length;

    function handleFilteredCourses (level,category,searchedQuery){
        // initial value if no filter applied
        let formattedCourses = courses;

        // filter by name 
        if(searchedQuery){
            formattedCourses = formattedCourses.filter((course)=>course.name.toLowerCase().includes(searchedQuery.toLowerCase()))
        }
        // filter by level
        if (level){
          formattedCourses = formattedCourses.filter((course)=>course.level === level)
        }
        // filter by category
        if (category){
          formattedCourses = formattedCourses.filter((course)=>course.category === category)
        }
  
       // updating the state after applying all or some of the  filters 
       setFilteredCourses(formattedCourses)
  
      }

      // updating state setter functions 
      function handleSearchQuery(searchQuery){
            setSearchQuery(searchQuery)
      }
  
     function handleFilteredByCategory(filteredByCategory){
        setFilteredByCategory(filteredByCategory)  
     }
  
      function handleFilteredByLevel(filteredByLevel){
        setFilteredByLevel(filteredByLevel)
      }

      // effect runs whenever any of the filters values change
      useEffect(()=>{
       
        handleFilteredCourses(filteredByLevel, filteredByCategory, searchQuery)
      },[searchQuery, filteredByCategory, filteredByLevel])

    return {
      handleFilteredByCategory,
      handleFilteredByLevel,
      handleSearchQuery,
      totalResults,
      filteredCourses,
    
    }
}

export default useFilterList
