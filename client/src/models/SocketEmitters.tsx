export interface SocketEmitters {
  startGame: Function;
  nextTurn: Function;
}

export const initialSocketEmitters = {
  startGame: () => {},
  nextTurn: () => {},
};
