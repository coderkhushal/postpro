
import { useGetToken } from "./useGetToken"
import { useIsTokenExpired } from "./useIsTokenExpired"

const BASE_URL_SERVER = "http://localhost:3000"

export const useRefreshToken = async() =>{
    try{

        let token = useGetToken()
        if(token && useIsTokenExpired(token)){
            let response = await fetch(`${BASE_URL_SERVER}/refresh-token`, {
                method: "POST",
                headers : {
                    "Content-Type": "application/json",
                    "Authorization":"Bearer "+token
                }
            })
            let data= await response.json()
            token = data.token
            if(token){

                return token         
            }
            return null;
        }
      
    }
    catch(err){
        console.log(err)

        throw new Error
    }
}