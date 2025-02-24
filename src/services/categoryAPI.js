import { API_ENDPOINTS } from "../config/apiEndpoints";
import useFetch from "../hooks/UseFetch";

const fetchHomeCategories=()=>{

    return useFetch({url:API_ENDPOINTS.GetCategorys})
}

export default fetchHomeCategories;