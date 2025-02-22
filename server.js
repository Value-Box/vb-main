// server.js (Node.js)
const express = require('express');
const os = require('os');

const app = express();
const port = 5000;

app.get('/local-ip', (req, res) => {
  const networkInterfaces = os.networkInterfaces();
  let ipAddress = '';

  // Loop through the network interfaces to find the local IP
  for (const interfaceName in networkInterfaces) {
    const interfaces = networkInterfaces[interfaceName];
    for (const net of interfaces) {
      if (net.family === 'IPv4' && !net.internal) {
        ipAddress = net.address;
        break;
      }
    }
  }

  res.json({ localIp: ipAddress });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});