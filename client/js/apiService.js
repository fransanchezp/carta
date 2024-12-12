export const apiService = {
    getGameState: async () => {
        const response = await fetch('http://localhost:3000/game-state');
        return response.json();
    },
    updateGameState: async (state) => {
        await fetch('http://localhost:3000/game-state', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(state),
        });
    },
};
