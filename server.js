import express from "express";
import cors from "cors";
import os from "os";
import axios from "axios";  

const app = express();
app.use(cors());

app.get("/ip-info", async (req, res) => {
  const networkInterfaces = os.networkInterfaces();
  let localIP = "Not Found";
  let macAddress = "Not Found";

  Object.values(networkInterfaces).forEach((interfaces) => {
    interfaces.forEach((iface) => {
      if (iface.family === "IPv4" && !iface.internal) { 
        localIP = iface.address;
        macAddress = iface.mac;
      }
    });
  });

  let publicIP = "Not Found";
  try {
    const response = await axios.get("https://api64.ipify.org?format=json");
    publicIP = response.data.ip;
  } catch (error) {
    console.error("Error fetching public IP:", error);
  }

  res.json({ localIP, macAddress, publicIP });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
