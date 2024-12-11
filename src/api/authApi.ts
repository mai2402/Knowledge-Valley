import supabase from "../supabase";



export async function getCurrentUser(){
    const{data:session} =await supabase.auth.getSession()


    if (!session.session) return null;

    const {data,error} = await supabase.auth.getUser()

    if(error)
        throw new Error(error.message)

    console.log(session,"session")
      return data?.user

}

export async function loginApi ({email,password}:{email:string,password:string}){

    if (!email || !password) {
        throw new Error("Email and password are required");
      }
  
const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  if(error)
    throw new Error("Invalid login credentials.")

  console.log("Login Successful:", data);
return data;

}
