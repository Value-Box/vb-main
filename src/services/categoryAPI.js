import { API_ENDPOINTS } from "../config/apiEndpoints";
import { getToken } from "../hooks/authAPI";
import useFetch from "../hooks/UseFetch";

const useFetchHomeCategories=()=>{
    const token=getToken()
    if(token){
        return useFetch({url:API_ENDPOINTS.GetCategorys})
    }   
}

export default useFetchHomeCategories;
