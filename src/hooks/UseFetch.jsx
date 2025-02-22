import { useState, useEffect } from "react";
import { getToken } from "./authAPI"; // Token ko fetch karne ke liye

const useFetch = ({ apiFunc, method = "GET", body = null, headers = {} }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  // ✅ Sirf ek baar token fetch karne ke liye
  useEffect(() => {
    setToken(getToken());
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        setError("Token is required but not found!");
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const options = {
          method,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            ...headers,
          },
          ...(body ? { body: JSON.stringify(body) } : {}),
        };

        const response = await apiFunc(options); // ✅ API call
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchData(); // ✅ API call sirf tab hogi jab token available hoga
    }
  }, [token]); // 🔥 `useEffect` sirf tab chalega jab token milega

  return { data, loading, error };
};

export default useFetch;



// import { getToken } from "./authAPI";

// export const UseFetch = async () => {
//   const token = getToken();

//   if (!token) {
//     console.warn("No token found, please login again.");
//     return [];
//   }

//   try {
//     const response = await fetch("http://182.176.166.222:8081/api/GetBrands/GetBrands", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `${token}`,
//       },
//     });

//     const result = await response.json();
//     console.log(result.data)
//     // ✅ Extract the correct "data" array
//     return Array.isArray(result.data) ? result.data : [];
//   } catch (error) {
//     console.error("Get Brands API Error:", error);
//     return [];
//   }
// };
