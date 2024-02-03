import { Card } from '../../base/card';
import { Deck } from '../../base/deck';
import { Player } from './player';

export class SwedishGame {
  private started = false;
  private readonly deck = new Deck();
  private readonly tableCards: Card[] = [];

  constructor(private readonly players: Player[]) {
    if (players.length !== 4) {
      throw new Error('Swedish requires 4 players');
    }
  }

  static createWithDummyPlayers() {
    return new SwedishGame([
      new Player('Player 1'),
      new Player('Player 2'),
      new Player('Player 3'),
      new Player('Player 4'),
    ]);
  }

  start() {
    if (this.started) throw new Error('Game already started');
    this.started = true;
    this.deck.shuffle();
    this.dealCards();
  }

  private dealCards() {
    // Deal 5 cards to each player
    for (let i = 0; i < 5; i++) {
      for (const player of this.players) {
        player.draw(this.deck);
      }
    }

    // Deal 5 cards to table/board
    for (let i = 0; i < 5; i++) {
      this.tableCards.push(this.deck.draw()!);
    }
  }

  getWinner() {
    // Determine game winner
  }
}
