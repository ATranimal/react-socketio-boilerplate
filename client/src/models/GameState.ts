export interface GameState {
  numberOfPlayers: number | null;
  started: boolean | null;
  cards: number[] | null;
}

export const initialGameState: GameState = {
  numberOfPlayers: null,
  started: null,
  cards: null,
};
