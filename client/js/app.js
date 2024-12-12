import { deckBuilder } from "./deckBuilder.js";
import { uiDrag } from "./uiDrag.js";
import { apiService } from "./apiService.js";

(async () => {
  try {
    const state = await apiService.getGameState();
    deckBuilder.renderDeck(state);
    uiDrag.init(".drop-zone", ".card");
  } catch (error) {
    console.log(error.message);
  }
})();
