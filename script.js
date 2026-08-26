const searchInput = document.querySelector('#search-input');
const searchForm = document.querySelector('#search-form');
const animeGrid = document.querySelector('#anime-grid');


// TEST 1: Funktionieren die Selektoren?
console.log("Formular gefunden:", searchForm);
console.log("Grid gefunden:", animeGrid);

async function searchAnime(query) {
    const url = `https://kitsu.io/api/edge/anime?filter[text]=${encodeURIComponent(query)}`;



    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Fehler: ${response.status}`);

        const result = await response.json();
        
        // Kitsu nutzt "data" mit anderer Struktur:
        displayKitsuAnime(result.data);

    } catch (error) {
        console.error("Fehler beim Laden:", error.message);
    }
}

// Angepasste Render-Funktion für Kitsu
function displayKitsuAnime(animeList) {
    animeGrid.innerHTML = '';

    animeList.forEach(item => {
        // Die Eigenschaften liegen bei Kitsu in "attributes"
        const title = item.attributes.canonicalTitle;
        const imageUrl = item.attributes.posterImage?.small;

        const cardHTML = `
            <div class="anime-card">
                <img src="${imageUrl}" alt="${title}">
                <h3>${title}</h3>
            </div>
        `;
        animeGrid.insertAdjacentHTML('beforeend', cardHTML);
    });
}



searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("2. Formular wurde abgeschickt!"); // TEST 2

    const query = searchInput.value.trim();
    if (query) {
        searchAnime(query);
    } else {
        console.log("Suchfeld war leer!");
    }
});