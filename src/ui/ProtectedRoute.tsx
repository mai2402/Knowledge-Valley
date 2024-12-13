import { useEffect } from "react";
import useUser from "../hooks/authentication/useUser";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";



export default function ProtectedRoute({children}:any) {
 
const {isLoading,isAuthenticated}= useUser()


const navigate = useNavigate()

useEffect(()=>{
   if(!isAuthenticated&& !isLoading)
    navigate("/login")

},[isLoading,isAuthenticated])

if(isLoading) {
 return <Spinner/>}


 if (isAuthenticated) {
    return children;
  }

  return null;
}
