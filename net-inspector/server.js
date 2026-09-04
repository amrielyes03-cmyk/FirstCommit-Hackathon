const express = require('express');
const cors = require('cors');
const find = require('local-devices');

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Erlaubt Anfragen von jeder Webseite/Browser
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', (req, res) => {
    res.send('Willkommen beim Netzwerkinspektor-Backend!');
});


app.get('/api/devices', async (req, res) => {
    try {
        const devices = await find();
        console.log("Gefundene echte Geräte:", devices);
        res.json(devices);
    } catch (error) {
        console.error('Fehler beim Netzwerk-Scan:', error);
        res.status(500).json({ error: 'Netzwerk-Scan fehlgeschlagen' });
    }
});


app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
