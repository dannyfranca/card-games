import { Card } from '../../base/card';
import { Deck } from '../../base/deck';

export class Player {
  name: string;
  private hand = new Set<Card>();

  constructor(name: string) {
    this.name = name;
  }

  draw(deck: Deck) {
    const card = deck.draw();
    if (card) {
      this.hand.add(card);
    }
  }

  playCard(card: Card) {
    this.hand.delete(card);
  }
}
