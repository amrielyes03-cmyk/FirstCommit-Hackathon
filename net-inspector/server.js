const express = require('express');
const cors = require('cors'); // <-- HIER NEU
const app = express();
const PORT = 3000;

app.use(cors()); // <-- HIER NEU: Erlaubt den Zugriff von außen (z.B. deinem Live Server)

app.get('/', (req, res) => {
    res.send('Willkommen beim Netzwerkinspektor-Backend!');
});

const mockDevices = [
    {
        ip: "192.168.1.10",
        mac: "A1:B2:C3:D4:E5:F6",
        vendor: "Apple, Inc.",
        status: "online",
        risk: "low",
        hostname: "iPhone-von-Elyes"
    },
    {
        ip: "192.168.1.25",
        mac: "58:CC:23:FF:EE:DD",
        vendor: "Espressif Inc. (IoT Device)",
        status: "online",
        risk: "medium",
        hostname: "ESP32-SmartPlug"
    }
];

app.get('/api/devices', (req, res) => {
    res.json(mockDevices);
});

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
