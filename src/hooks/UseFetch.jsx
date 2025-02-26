import { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "./authAPI";

export const useFetch = ({ method = "GET", url, data = null, headers = {} }) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = getToken();
      if (!url || !token) {
        console.warn("API call skipped: Missing URL or Token");
        setLoading(false);
        return;
      }

      try {
        const result = await axios({
          method,
          url,
          data,
          headers: {
            Authorization: `Bearer ${token}`,
            ...headers,
          },
        });

        setResponse(result.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [method, url, data]); // Dependency array

  return { response, loading, error };
};




// import { useState, useEffect, useMemo, useCallback } from "react";
// import { getToken } from "./authAPI";

// const useFetch = ({ url, method = "GET", body = null, headers = {} }) => {
//   const [data, setData] = useState(undefined);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [token, setToken]  = useState(null);


//   // ✅ Token ek baar fetch hoga
//   useEffect(() => {
//     setToken(getToken());
//   }, []);

//   // ✅ Memoize `headers` aur `body` to prevent unnecessary re-renders
//   const memoizedHeaders = useMemo(() => ({ ...headers }), [JSON.stringify(headers)]);
//   const memoizedBody = useMemo(() => (body ? JSON.stringify(body) : null), [JSON.stringify(body)]);

//   // ✅ Function ko useCallback se wrap kiya, taake unnecessary re-creation na ho
//   const fetchData = useCallback(async () => {
//     if (!url) return;
//     if (!token) {
//       setError("Token is required but not found!");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch(url, {
//         method,
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//           ...memoizedHeaders,
//         },
//         ...(memoizedBody ? { body: memoizedBody } : {}),
//       });

//       if (!response.ok) {
//         throw new Error(`Error ${response.status}: ${response.statusText}`);
//       }
      
//       const result = await response.json();
//       // console.log(result)
//       setData(result);
      
//     } catch (err) {
//       setError(err.message || "Something went wrong!");
//     } finally {
//       setLoading(false);
//     }
//   }, [url, token, method, memoizedHeaders, memoizedBody]);

//   // ✅ Fetch only when token & url are available
//   useEffect(() => {
//     if (token && url) {
//       fetchData();
//     }
//   }, [token, url, fetchData]);

//   return { data, loading, error, refetch: fetchData }; // ✅ Added `refetch` for manual reload
// };

// export default useFetch;







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
