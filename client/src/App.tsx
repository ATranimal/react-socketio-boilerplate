import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./App.scss";

import { LoginPage } from "./LoginPage";
import { GamePage } from "./GamePage";
import { GameState, initialGameState } from "./models/GameState";

const SERVER_IP = "http://localhost:3001";

interface AppProps {
  name: string;
}

const App = () => {
  const [roomName, setRoomName] = useState("");
  const [userName, setUserName] = useState("");
  const [connected, setConnected] = useState(false);

  const [gameState, setGameState] = useState<GameState>(initialGameState);

  useEffect(() => {
    if (connected) {
      const socket = io(SERVER_IP);

      socket.emit("join", roomName);

      socket.on("updateGameState", (gameState: GameState) => {
        console.log(gameState);
        setGameState(gameState);
      });
    }
  }, [connected, roomName]);

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
        <GamePage gameState={gameState} />
      )}
    </div>
  );
};

export default App;
