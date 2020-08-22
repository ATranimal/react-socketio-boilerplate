import { GameState } from "../models/GameState";

export const isYourTurn = (gameState: GameState, userName: string) => {
  if (gameState?.players !== null && gameState?.playerTurn !== null) {
    return gameState.players[gameState.playerTurn] === userName;
  }
  return false;
};
