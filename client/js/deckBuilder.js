export const deckBuilder = {
    renderDeck: (state) => {
        const container = document.getElementById('cards-container');
        container.innerHTML = ''; 

        Object.entries(state).forEach(([suit, cards]) => {
            cards.forEach(({ id, value }) => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.id = id;
                card.dataset.suit = suit;
                card.dataset.value = value;
                card.textContent = value;
                container.appendChild(card);
            });
        });
    },
};
