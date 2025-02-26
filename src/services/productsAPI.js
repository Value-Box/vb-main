    import { API_ENDPOINTS } from "../config/apiEndpoints";
    import {useFetch} from "../hooks/UseFetch";


    const useFetchHomeProducts = () => {  // ✅ Custom hook ka naam `use` se start hona chahiye
        
        return useFetch({ url: API_ENDPOINTS.GetProducts });
    };

    export default useFetchHomeProducts;