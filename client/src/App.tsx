import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./App.scss";

import { LoginPage } from "./LoginPage";
import { GamePage } from "./GamePage";
import { GameState, initialGameState, mockGameState } from "./models/GameState";
import { SocketEmitters, initialSocketEmitters } from "./models/SocketEmitters";
import { CardType } from "./models/CardType";
import { Rules } from "./Rules/Rules";
import { RulesModal } from "./Rules/RulesModal";

const SERVER_IP = "167.172.151.14";
// const SERVER_IP = "localhost:4001";

interface AppProps {
  name: string;
}

const App = () => {
  // For dev
  const [roomName, setRoomName] = useState("");
  const [userName, setUserName] = useState("");
  const [connected, setConnected] = useState(false);
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [rulesOpen, setRulesOpen] = useState(false);

  // For Testing
  // const [roomName, setRoomName] = useState("Test Room");
  // const [userName, setUserName] = useState("Kaelan");
  // const [connected, setConnected] = useState(true);
  // const [gameState, setGameState] = useState<GameState>(mockGameState);

  const [socketEmitters, setSocketEmitters] = useState<SocketEmitters>(
    initialSocketEmitters
  );

  useEffect(() => {
    if (connected) {
      const socket = io(SERVER_IP);

      socket.emit("join", roomName, userName);

      socket.on("updateGameState", (gameState: GameState) => {
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
      <Rules rulesOpen={rulesOpen} setRulesOpen={setRulesOpen} />
      {rulesOpen && <RulesModal />}
    </div>
  );
};

export default App;
