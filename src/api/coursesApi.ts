import supabase  from "../supabase";


export async function getCourses(){

  const { data: courses, error } = await supabase
  .from('courses')
  .select('*')

  if (error){
    console.error(error)
    throw new Error("courses could not be loaded")
  }
  return courses;
}


