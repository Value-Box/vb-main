// import { useState } from "react";

// const useAPI = (apiFunc) => {
//   const [loading, setLoading] = useState(false);

//   const request = async (...args) => {
//     setLoading(true);
//     const response = await apiFunc(...args);
//     setLoading(false);
//     return response;
//   };

//   return { request, loading };
// };

// export default useAPI;


import { getToken } from "./authAPI";

export const UseFetch = async () => {
  const token = getToken();

  if (!token) {
    console.warn("No token found, please login again.");
    return [];
  }

  try {
    const response = await fetch("http://192.168.1.196:8081/api/GetBrands/GetBrands", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });

    const result = await response.json();
    console.log(result.data)
    // ✅ Extract the correct "data" array
    return Array.isArray(result.data) ? result.data : [];
  } catch (error) {
    console.error("Get Brands API Error:", error);
    return [];
  }
};
