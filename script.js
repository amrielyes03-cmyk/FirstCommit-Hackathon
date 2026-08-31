// Wir fragen unseren lokalen Server nach den Geräten
fetch('http://localhost:3000/api/devices')
    .then(response => response.json()) // Wir wandeln die Antwort in echtes JavaScript um
    .then(devices => {
        console.log("Empfangene Geräte:", devices);
        
        // Hier rufen wir gleich eine Funktion auf, die das HTML baut
        // renderDevices(devices);
    })
    .catch(error => console.error('Fehler beim Laden:', error));
