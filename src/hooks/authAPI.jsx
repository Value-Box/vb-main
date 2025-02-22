
const isLocal = window.location.hostname === "localhost";
const ipAddress = isLocal ? "192.168.1.7" : await getPublicIP();
const macAddress = isLocal ? "64-51-06-56-B7-6C" : "00-00-00-00-00-00";

export const authAPI = async () => {

    try {
      const response = await fetch("http://182.176.166.222:8081/api/GetSecurityKey/SecurityKey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          UserName: 'arshad',
          Password: 'arshad',
          MACAddress: macAddress,
          IPAddress: ipAddress,
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
  