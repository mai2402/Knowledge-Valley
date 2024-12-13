import { useMutation } from "@tanstack/react-query"
import { signUpApi } from "../../api/authApi"

function useSignUp() {
    const{mutate:signUp}= useMutation({
        mutationFn:signUpApi
    })
    return signUp
    
}

export default useSignUp
