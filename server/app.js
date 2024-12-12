const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let gameState = {
    basto: [],
    copa: [],
    espada: [],
    oro: [],
};

app.get('/game-state', (req, res) => res.json(gameState));

app.post('/game-state', (req, res) => {
    gameState = req.body;
    res.status(200).send('Game state updated');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
