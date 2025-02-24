import express from "express";
import cors from "cors";
import os from "os";  // System info ke liye OS module use kar rahe hain

const app = express();
app.use(cors());  // CORS allow kar rahe hain taake frontend request bhej sake

// ✅ API Endpoint: /local-ip
app.get("/local-ip", (req, res) => {
  const networkInterfaces = os.networkInterfaces(); // System ke network interfaces get karo
  let localIP = "Not Found";
  let macAddress = "Not Found";

  // Har network interface ko check karo
  Object.values(networkInterfaces).forEach((interfaces) => {
    interfaces.forEach((iface) => {
      if (iface.family === "IPv4" && !iface.internal) { 
        // ✅ IPv4 aur non-internal (external) address find karo
        localIP = iface.address;
        macAddress = iface.mac; 
      }
    });
  });

  // ✅ Response frontend ko send karo
  res.json({ localIP, macAddress });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
