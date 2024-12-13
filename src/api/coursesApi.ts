import { FILTER_KEYS, PAGE_SIZE, TABLE_NAMES } from "../constants/Constants";
import { filterListDTO } from "../hooks/useFilterList";
import supabase  from "../supabase";
import { CourseSchema } from "../types/CourseSchema";



  export async function getCourses
      (page: number,{ level, category, searchQuery } :filterListDTO) 
      : Promise<{ courses: CourseSchema[]; count: number }>
{

  let query = supabase.from(TABLE_NAMES.COURSES).select("*", {count:"exact"})

  // pagination

  if(page)
  {
    const from = (page-1)* PAGE_SIZE;
    const to   = from + (PAGE_SIZE - 1);
    console.log(`Fetching items from ${from} to ${to}`);

    query= query.range(from,to);
  }

  // filtering by Category , Level
  if(level)
    query = query.eq(FILTER_KEYS.level, level)

  if(category)
    query = query.eq(FILTER_KEYS.category, category)
  
  // filter by search name 
  if(searchQuery)
    query = query.ilike("name", `%${searchQuery}%`)
  
  
 const { data: courses, error,count } = await query

  if (error){
    console.error(error)
    throw new Error("courses could not be Loaded")
  }



  return {courses: courses || [], count: count || 0};
}


export async function getCourseById(courseId:number){

const { data, error } = await supabase
.from('courses')
.select("*")
.eq("id",courseId)
.single()

if (error){
  console.error(error)
  throw new Error("course could not be Loaded")

}

return data;

}

export async function AddNewCourse (){

    const { data, error } = await supabase
    .from('courses')
    .insert([
      { some_column: 'someValue', other_column: 'otherValue' },
    ])
    .select()
    if (error){
      console.error(error)
      throw new Error("course could not be Added")
    }
   
    return data;
}


export async function deleteCourse (){

    const { error } = await supabase
    .from('courses')
    .delete()
    .eq('some_column', 'someValue')

    if (error){
    console.error(error)
    throw new Error("course could not be Deleted")
    }

}


export async function EditCourse (){

    const { data, error } = await supabase
    .from('courses')
    .update({ other_column: 'otherValue' })
    .eq('some_column', 'someValue')
    .select()
    
    
    if (error){
      console.error(error)
      throw new Error("course could not be Deleted")
      }

      return data;
}



