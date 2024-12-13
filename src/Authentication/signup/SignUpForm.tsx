import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { schema } from "../../validationSchema";
import SignUp from "../../pages/SignUp";
import useSignUp from "../../hooks/authentication/useSignUp";

interface SignUpFormProps {
    email:string;
    username:string;
    password:string;
    confirmPassword: string;
}
export default function SignUpForm() {
  const{register,handleSubmit,formState:{isSubmitting,errors}}= useForm<SignUpFormProps>({
    resolver: yupResolver(schema),
  })

const signUp =useSignUp()

  function onSubmitForm(data:SignUpFormProps){
     const { confirmPassword, ...signupData } = data; 
    console.log(data,"form data")
    signUp(signupData)
    
  }

    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center sign-up-container">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full sm:max-w-md md:max-w-lg lg:max-w-xl z-10">
          <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                {...register("username")}
                type="text"
                id="username"
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
            </div>
  
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
  
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                id="password"
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>
  
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                {...register("confirmPassword")}
                type="password"
                id="confirmPassword"
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
              )}
            </div>
  
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full py-2 hover:bg-teal-600 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition"
            >
              {isSubmitting ? "Submitting..." : "Sign Up"}
            </button>
          </form>
  
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:text-teal-600 transition">
                Log in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    )
}
