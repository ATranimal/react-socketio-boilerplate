import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./App.scss";

import { LoginPage } from "./LoginPage";
import { GamePage } from "./GamePage";
import { GameState, initialGameState } from "./models/GameState";
import { SocketEmitters, initialSocketEmitters } from "./models/SocketEmitters";
import { CardType } from "./models/CardType";

const SERVER_IP = "192.168.0.11:3001";

interface AppProps {
  name: string;
}

const App = () => {
  const [roomName, setRoomName] = useState("");
  const [userName, setUserName] = useState("");
  const [connected, setConnected] = useState(false);
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [socketEmitters, setSocketEmitters] = useState<SocketEmitters>(
    initialSocketEmitters
  );

  useEffect(() => {
    if (connected) {
      const socket = io(SERVER_IP);

      socket.emit("join", roomName, userName);

      socket.on("updateGameState", (gameState: GameState) => {
        console.log(gameState);
        setGameState(gameState);
      });

      setSocketEmitters({
        startGame: () => {
          socket.emit("startGame", roomName);
        },
        nextTurn: (cardType: CardType) => {
          socket.emit("nextTurn", roomName, cardType);
        },
      });
    }
  }, [connected, roomName, userName]);

  return (
    <div className="app">
      {!connected ? (
        <LoginPage
          roomName={roomName}
          setRoomName={setRoomName}
          userName={userName}
          setUserName={setUserName}
          setConnected={setConnected}
        />
      ) : (
        <GamePage
          gameState={gameState}
          socketEmitters={socketEmitters}
          userName={userName}
          roomName={roomName}
        />
      )}
    </div>
  );
};

export default App;
