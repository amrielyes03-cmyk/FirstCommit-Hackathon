fetch('http://localhost:3000/api/devices')
    .then(response => response.json())
    .then(devices => {
        // 1. Schau in die Browser-Konsole (F12)
        console.log("Empfangene Geräte:", devices);
        
        // 2. Zeige die Daten direkt auf dem Bildschirm an
        document.getElementById('output').textContent = JSON.stringify(devices, null, 2);
    })
    .catch(error => {
        console.error('Fehler beim Laden:', error);
        document.getElementById('output').textContent = 'Fehler: Konnte keine Verbindung zum Server herstellen!';
    });
