const searchInput = document.querySelector('#search-input');
const searchForm = document.querySelector('#search-form');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const query = searchInput.value;
    console.log(query);
});