const showData = document.getElementById('output');

function ladeGeräte() {
    document.getElementById('output').textContent = 'Scanne Netzwerk... Bitte warten...';

    fetch('http://localhost:3000/api/devices')
        .then(response => {
            if (!response.ok) {
                throw new Error('Server hat mit Fehler geantwortet');
            }
            return response.json();
            })

        .then(devices => {
            console.log("Empfangene Geräte:", devices);
            document.getElementById('output').textContent = JSON.stringify(devices, null, 2);
            })
            .catch(error => {
                console.error('Fehler beim Laden:', error);
                document.getElementById('output').textContent = 'Fehler: Konnte keine Verbindung zum Server herstellen!';
            });
        }