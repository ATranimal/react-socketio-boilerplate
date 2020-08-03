export interface GameState {
  numberOfPlayers: number | null;
  started: boolean | null;
}

export const initialGameState: GameState = {
  numberOfPlayers: null,
  started: null,
};
