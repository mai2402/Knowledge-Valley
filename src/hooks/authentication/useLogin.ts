import { useMutation, useQueryClient } from "@tanstack/react-query"
import { loginApi } from "../../api/authApi";
import { useNavigate } from "react-router-dom";


function useLogin() {

    const queryClient = useQueryClient();
    const navigate = useNavigate()
    const {mutate:login,isPending }= useMutation({
        mutationFn:({ email, password }: { email: string; password: string })=>loginApi({email,password}),
        
        onSuccess:(user)=>{
            queryClient.setQueryData(["users"],user.user)
            navigate("/admin",{replace:true})
        },

        onError:(err)=>{
            
            console.log(err,"error")
          }
    })

    return {login,isPending}
}

export default useLogin;
