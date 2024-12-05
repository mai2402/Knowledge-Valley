import { useState } from "react";


function useFilterList(courses) {
    const [filteredCourses, setFilteredCourses]= useState(courses)
    const [filteredByLevel, setFilteredByLevel]= useState("")
    const [filteredByCategory,setFilteredByCategory] = useState("")
    const totalResults = filteredCourses.length;

    function handleFilteredCourses (level,category){

        let updatedCourses = courses;
  
        if (level){
          updatedCourses = updatedCourses.filter((course)=>course.level === level)
        }
  
        if (category){
          updatedCourses = updatedCourses.filter((course)=>course.category === category)
        }
  
  
       setFilteredCourses(updatedCourses)
  
      }
  
     function handleFilteredByCategory(category){
        setFilteredByCategory(category)
        handleFilteredCourses(filteredByLevel,category)
      
     }
  
      function handleFilteredByLevel(level){
        
        setFilteredByLevel(level)
        handleFilteredCourses(level,filteredByCategory)
        
      }
    return {handleFilteredByCategory,handleFilteredByLevel,totalResults,filteredCourses}
}

export default useFilterList
