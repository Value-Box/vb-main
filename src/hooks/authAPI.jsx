
// export const authAPI = async () => {
//     try {
//       const response = await fetch("http://182.176.166.222:8081/api/GetSecurityKey/SecurityKey", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           UserName: 'arshad',
//           Password: 'arshad',
//           MACAddress: "64-51-06-56-B7-6C",
//           IPAddress: "192.168.1.7",
//           Source: "1",
//         }),
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP Error! Status: ${response.status}`);
//       }
  
//       const data = await response.json();
//       console.log(data.data.token)
//       if (data.statusCode === 200) {
//         // ✅ Token ko sirf sessionStorage me store kar rahe hain
//         sessionStorage.setItem("token", data.data.token);
        
//         return data.data.token;
//       } else {
//         console.error("Login failed:", data.message);
//         return null;
//       }
//     } catch (error) {
//       console.error("API Error:", error);
//       return null;
//     }
//   };
  
//   // ✅ Function to Get Token from sessionStorage
//   export const getToken = () => {
//     return sessionStorage.getItem("token");
//   };
  

export const fetchNetworkInfo = async () => {
  try {

    const response = await fetch("http://localhost:5000/local-ip"); // ✅ Backend se data lo
    const data = await response.json();
    return {
      localIP: data.localIP || "Not Found",
      macAddress: data.macAddress || "Not Found",
    };
  } catch (error) {
    console.error("Error fetching network info:", error);
    return { localIP: "Error", macAddress: "Error" };
  }
};

export const authAPI = async () => {
  try {
    const existingToken = sessionStorage.getItem("token");
    if (existingToken) {
      return existingToken; // ✅ Agar token pehle se hai to return kar do
    }
    // ✅ Pehle network info fetch karo
    const networkInfo = await fetchNetworkInfo(); 
// ✅ Check karo agar network info valid nahi hai to API call mat karo
if (networkInfo.macAddress === "Error" || networkInfo.localIP === "Error") {
  console.error("Network info could not be fetched. Skipping API call.");
  return null;
}
    const response = await fetch("http://182.176.166.222:8081/api/GetSecurityKey/SecurityKey", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UserName: "arshad",
        Password: "arshad",
        MACAddress: networkInfo.macAddress,
        IPAddress: networkInfo.localIP,
        Source: "1",
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json();
    // console.log("Token:", data.data.token);

    if (data.statusCode === 200) {
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
export const getToken = () => sessionStorage.getItem("token");
