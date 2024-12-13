import { useMutation, useQueryClient } from "@tanstack/react-query"
import { logoutApi } from "../../api/authApi";
import { useNavigate } from "react-router-dom";




function useLogout() {
    const queryClient = useQueryClient();
    const navigate = useNavigate()
    const {mutate:logout}= useMutation({

         mutationFn:logoutApi,
         onSuccess:()=>{
            queryClient.removeQueries()
            navigate("/login",{replace:true})
         }
    })
    return {logout}
}

export default useLogout
