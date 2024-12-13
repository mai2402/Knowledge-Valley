import { useQuery } from "@tanstack/react-query"
import { getCourseById } from "../../api/coursesApi"




function useGetCourseById(courseId:number) {
    
   const {data:course={},error}=useQuery({
          queryKey:["courses",courseId],
          queryFn:()=>getCourseById(Number(courseId)),
          retry:false,
   })
  
   return{course,error}
}

export default useGetCourseById
