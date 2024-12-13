
import CourseList from "../features/courses/CourseList"
import { CourseSchema } from "../types/CourseSchema";
import { CoursesFilters } from "../ui/Header";

 export interface CourseListProps{
    courses: CourseSchema[],
    updatedFilteredCourses: (filters: Partial<CoursesFilters>) => void;
    page:number,
    pageCount:number,
    isLoading:boolean,
  

}


function Courses({
    courses=[],
    updatedFilteredCourses,
    page,
    pageCount,
    isLoading,}:CourseListProps) {
    return (
        <div className="bg-gray-50 min-h-full p-10">
            {/* Intro Section */}
            <section className="text-center mb-10">
                <h1 className="text-lg font-semibold text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    At Knowledge Valley, we provide a diverse range of online courses designed to help you grow in your career and personal life. Whether you're a budding web developer, an aspiring data scientist, or a business leader in the making, you'll find courses to suit your goals. Explore below and start learning today!
                </h1>
            </section>
            
            {/* Decorative Section Break */}
            <div className="my-10 border-t-2 border-teal-600 w-2/3 mx-auto"></div>

            {/* Course Listings Section */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Our Top Courses</h2>
                <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
                    Browse our popular courses across various fields. Each course is crafted with in-depth lessons, practical projects, and expert guidance to help you succeed.
                </p>
                
                <CourseList  isLoading={isLoading} courses={courses} updatedFilteredCourses={updatedFilteredCourses} page={page} pageCount={pageCount}/>
            </section>
        </div>
    );
}

export default Courses;
