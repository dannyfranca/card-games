import { Card, Rank, Suit } from './card';

export class Deck {
  private cards: Card[] = [];

  constructor() {
    for (let suit in Suit) {
      if (isNaN(Number(suit))) {
        continue;
      }
      for (let rank = Rank.Two; rank <= Rank.Ace; rank++) {
        this.cards.push(new Card(+suit, rank));
      }
    }
  }

  /**
   * Shuffle the deck using the Fisher-Yates algorithm.
   */
  shuffle(): void {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  draw(): Card | undefined {
    return this.cards.pop();
  }

  [Symbol.iterator]() {
    let index = -1;
    return {
      next: () => ({
        value: this.cards[++index],
        done: index >= this.cards.length,
      }),
    };
  }
}
