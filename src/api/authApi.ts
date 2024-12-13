import supabase from "../supabase";



export async function getCurrentUser(){
    const{data:session} =await supabase.auth.getSession()
    
    if (!session.session) return null;

    const {data,error} = await supabase.auth.getUser()

    if(error)
        throw new Error(error.message)


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
 
 
return data;

}


export async function logoutApi(){
  

  const  { error } = await supabase.auth.signOut()

  if (error)
    throw new Error(error.message)
}


export async function signUpApi ({username,email,password}:{username:string,email:string,password:string}){

  
  
  const { data :user, error } = await supabase.auth.signUp({
    email,
    password,
    options:{
      data: { displayName: username },
  }
})
  console.log(user,"signupapi data ")
   
  if (error)
    throw new Error(error.message)
  
  return user;
}