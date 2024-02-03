import { Card } from '../../base/card';
import { Deck } from '../../base/deck';

export class Player {
  name: string;
  hand: Card[] = [];

  constructor(name: string) {
    this.name = name;
  }

  draw(deck: Deck): void {
    const drewCard = deck.draw();
    if (!drewCard) return;
    this.hand.push(drewCard);
  }

  playCard(card: Card) {
    // Game logic to play card
  }
}
