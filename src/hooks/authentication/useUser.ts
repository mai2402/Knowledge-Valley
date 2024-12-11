import { useQuery } from "@tanstack/react-query"
import { getCurrentUser } from "../../api/authApi"


function useUser() {
  const {data: user,isLoading,error} = useQuery({
          queryKey:["users"],
          queryFn: getCurrentUser,
  })

  const isAuthenticated= user?.role === "authenticated"
  console.log(isAuthenticated,"isauthen")
    
    return {user,isLoading,error,isAuthenticated}
     
}

export default useUser
