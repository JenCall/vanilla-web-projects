// Store card data
const cardsData = getCardsData();

// Create all cards
function createCards() {
    cardsData.forEach((data, index) => createCard(data, index));
}