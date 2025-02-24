import { useState, useEffect } from "react";
export const authAPI = async () => {
    const [networkInfo, setNetworkInfo] = useState({
      localIP: "Fetching...",
      macAddress: "Fetching...",
    });
  
    useEffect(() => {
      const fetchNetworkInfo = async () => {
        try {
          const response = await fetch("http://localhost:5000/local-ip"); // ✅ Backend API call
          const data = await response.json();
          setNetworkInfo(data); // ✅ State update karo
        } catch (error) {
          console.error("Error fetching network info:", error);
        }
      };
  
      fetchNetworkInfo();
    }, []);
    try {
      const response = await fetch("http://182.176.166.222:8081/api/GetSecurityKey/SecurityKey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          UserName: 'arshad',
          Password: 'arshad',
          MACAddress: `${networkInfo.macAddress}`,
          IPAddress: `${networkInfo.localIP}`,
          Source: "1",
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data.data.token)
      if (data.statusCode === 200) {
        // ✅ Token ko sirf sessionStorage me store kar rahe hain
        sessionStorage.setItem("token", data.data.token);
        
        return data.data.token;
      } else {
        console.error("Login failed:", data.message);
        return null;
      }
    } catch (error) {
      console.error("API Error:", error);
      return null;
    }
  };
  
  // ✅ Function to Get Token from sessionStorage
  export const getToken = () => {
    return sessionStorage.getItem("token");
  };
  
