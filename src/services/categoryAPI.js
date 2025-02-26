import { API_ENDPOINTS } from "../config/apiEndpoints";
import {useFetch} from "../hooks/UseFetch";

const useFetchHomeCategories=()=>{
    return useFetch({url:API_ENDPOINTS.GetCategorys}) 
}

export default useFetchHomeCategories;
