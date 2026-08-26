const searchInput = document.querySelector('#search-input');
const searchForm = document.querySelector('#search-form');

const animeGrid = document.querySelector('#anime-grid');

const extraCard = document.querySelector('#extraInfo');
const extraCardBtn = document.querySelector("#open-extraInfo");
const extraContent = document.querySelector("#extraInfoContent")


async function searchAnime(query) {
    const url = `https://kitsu.io/api/edge/anime?filter[text]=${encodeURIComponent(query)}`;



    try {
        // 1. VOR dem Fetch: Lade-Anzeige anzeigen
        animeGrid.innerHTML = '<p class="status-msg">Lade Animes...</p>';

        const response = await fetch(url);
        if (!response.ok) throw new Error(`Fehler: ${response.status}`);

        const result = await response.json();
        console.log("Gesamte API-Antwort:", result);

        // 2. WENN KEINE ERGEBNISSE GEFUNDEN WURDEN:
        if (result.data.length === 0) {
            animeGrid.innerHTML = '<p class="status-msg">Keine Animes gefunden.</p>';
            return;
        }
        
// 3. ERFOLG: Karten rendern (überschreibt die Lade-Anzeige)
        displayKitsuAnime(result.data);

    } catch (error) {
        console.error("Fehler beim Laden:", error.message);
        animeGrid.innerHTML = '<p class="status-msg">Etwas ist schiefgeflaufen. Versuche es erneut...</p>';
    }
}

// Angepasste Render-Funktion für Kitsu
function displayKitsuAnime(animeList) {
    animeGrid.innerHTML = '';

    animeList.forEach(item => {
        const title = item.attributes.canonicalTitle;
        const imageUrl = item.attributes.posterImage?.small;

        const cardHTML = `
            <div class="anime-card">
                <a href="#" class="open-extraInfo"><img src="${imageUrl}" alt="${title}"></a>
                <h3>${title}</h3>

                <div class="extraInfo">
                    <div class='extraInfoContent'>
                        <p class="startDate">Start: ${item.attributes.startDate}</p>
                        <p class="rating">Note: ${item.attributes.averageRating}%</p>
                        <p class="episodes">Folgen: ${item.attributes.episodeCount}</p>
                    </div>
                </div>
            </div>
        `;

        // 1. ZUERST HTML ins Grid einfügen
        animeGrid.insertAdjacentHTML('beforeend', cardHTML);

        // 2. JETZT genau diese neu eingefügte Karte greifen
        const currentCard = animeGrid.lastElementChild;
        const extraCardBtn = currentCard.querySelector(".open-extraInfo");
        const extraCard = currentCard.querySelector('.extraInfo');

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