import useFilterList from "../hooks/useFilterList";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import Courses from "./Courses";



  
function HomePage() {
 const {
        courses,
        updatedFilteredCourses,
        page,
        pageCount,
        isLoading,
        coursesFilters
    } = useFilterList();
    
    return (
<>
    <div>
        <Header updatedFilteredCourses={updatedFilteredCourses} coursesFilters={coursesFilters}/>
    </div>

    <div>
        <Courses  isLoading={isLoading} courses={courses!} updatedFilteredCourses={updatedFilteredCourses} page={page} pageCount={pageCount}  />
    </div>
    <div>
        <Footer/>
    </div>
</>
    );
}

export default HomePage;






