import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import useLogin from "../../hooks/authentication/useLogin";


interface LoginFormProps {
    email:string;
    password:string;
}

function LoginForm() {
    const {register,handleSubmit,formState:{isLoading}}= useForm<LoginFormProps>()
    const {login}= useLogin()

    function onSubmit(data: LoginFormProps){
        login(data)
        console.log(data,"data")
      
    }

    if(isLoading) return (<Spinner/>)
 
    return (
        <>
        <header className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 text-primary z-20">
                   <Link to="/" className="text-3xl font-bold">Knowledge Valley</Link>
                   <nav className="flex items-center  text-lg">
                       <Link to="/about" className="text-primary hover:text-teal-600 transition px-4">About</Link>
                       <Link to="/contact" className="text-primary hover:text-teal-600 transition ">Contact Us</Link>
                   </nav>
               </header>
           <div className="flex items-center justify-center min-h-screen bg-gray-200">
           <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
             <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
             
             <form onSubmit={handleSubmit(onSubmit)}>
             <input
                    id="email"
                    type="text"
                    placeholder="email"
                    className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    {...register("email", { required: true })} // Add validation if needed
      />
               <input
                 id="password"
                 type="password"
                 placeholder="Password"
                 className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                 {...register("password", { required: true })}
            />
               <button
                 type="submit"
                 className="block w-full py-2 bg-primary text-white font-semibold text-center rounded-lg hover:bg-teal-700 transition"
               >
                 Log in
               </button>
             </form>
     
             <div className="mt-4 text-center">
               <p className="text-sm">
                 Don't have an account?{" "}
                 <Link to="/signup" className="text-primary hover:text-teal-600 transition">
                   Sign Up
                 </Link>
               </p>
             </div>
           </div>
         </div>
                 </>
    )
}

export default LoginForm


