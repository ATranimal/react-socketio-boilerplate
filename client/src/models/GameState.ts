export interface GameState {
  started: boolean | null;
  playerTurn: number | null;
  cards: number[] | null;
  players: string[] | null;
}

export const initialGameState: GameState = {
  started: null,
  playerTurn: null,
  cards: null,
  players: null,
};
