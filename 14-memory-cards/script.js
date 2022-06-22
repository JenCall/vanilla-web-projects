const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentEl = document.getElementById('current');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');

// Store card data
const cardsData = getCardsData();

// Create all cards
function createCards() {
    cardsData.forEach((data, index) => createCard(data, index));
}