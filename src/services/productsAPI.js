import { API_ENDPOINTS } from "../config/apiEndpoints";
import useFetch from "../hooks/UseFetch";

const useFetchHomeProducts = () => {
    const { data, loading, error } = useFetch({ url: API_ENDPOINTS.GetProducts });

    console.log("Home Products API Response:", data);


    return { data, loading, error };
};

export default useFetchHomeProducts;
