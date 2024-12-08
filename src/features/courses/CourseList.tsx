import CourseCard from "./CourseCard";
import ListFilterBox from "../../ui/ListFilterBox";
// import useFilterList from "../../hooks/useFilterList";
// import SearchBar from "../../ui/SearchBar";
// import { CourseSchema } from "../../types/CourseSchema";

import useFilterList from "../../hooks/useFilterList";
import { CATEGORY_KEYS, FILTER_KEYS, LEVEL_KEYS } from "../../constants/Constants";
import SearchBar from "../../ui/SearchBar";
import Pagination from "../../ui/Pagination";



  
 

  
 function CourseList() {
  // const {courses}= useDisplayCourses()
  

  
   const {courses,updatedFilteredCourses,coursesFilters,count,page,pageCount}= useFilterList()
   const unifiedLevels = Object.values(LEVEL_KEYS);
   const unifiedCategories =  Object.values(CATEGORY_KEYS);
   const totalResults = courses?.length || 0;

  return(
    <>
  <div  className="flex flex-row justify-between items-center"> 
    
    <span>{totalResults >1? `${totalResults} Results`:`${totalResults} Result`}</span>

    <SearchBar query={coursesFilters.searchQuery} onSearch={updatedFilteredCourses} 
               filterKey={FILTER_KEYS.name}/>
               
  <div className="flex justify-between items-center">
     <ListFilterBox  list={unifiedLevels} placeholder="filter by level" 
                  onSelection={updatedFilteredCourses} filterKey={FILTER_KEYS.level}  />
     <ListFilterBox  list={unifiedCategories} placeholder="filter by Category" 
                 onSelection={updatedFilteredCourses} filterKey={FILTER_KEYS.category} />
                  </div>
  </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {courses?.map((course) => (
            
            <CourseCard key={course.id} course={course} />
          ))}
              
 
    </div>
    <div>
      <Pagination count={count} page={page} pageCount={pageCount}/>
    </div>
          </>
  )
      // return (<>
      //   <div  className="flex flex-row justify-between items-center"> 
      //         {/* showing results after filtering */}
      //         <span>{totalResults>1? `${totalResults} Results`:`${totalResults} Result`}</span>
      //          {/* filter by name using search box */}
      //         <SearchBar query={searchQuery} onSearch={handleSearchQuery} />
      //         <div className="flex justify-between items-center">
      //           {/* filtering by category and level */}
      //         <ListFilterBox  list={unifiedLevels} placeholder="filter by level" onSelection={handleFilteredByLevel}  />
      //         <ListFilterBox  list={unifiedCategories} placeholder="filter by Category" onSelection={handleFilteredByCategory}/>
      //     </div>

      //   </div>
            
      //      {filteredCourses.length === 0 ? (
      //            <p className="text-black font-semibold text-md text-center">No results were found :(</p>
      //      ):(
      //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      //         {filteredCourses.map((course) => (
      //           <CourseCard key={course.id} course={course} />
      //         ))}
      //     </div>)}
      //         </>

      // );
  }
  
  export default CourseList;
  