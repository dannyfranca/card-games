import { Deck } from './base/deck';

const deck = new Deck();

deck.shuffle();

for (const card of deck) {
  console.log(card.display());
}
