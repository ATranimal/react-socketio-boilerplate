import React from "react";

import "./PlayerList.scss";

interface PlayerListProps {
  players: string[] | null;
  activePlayerIndex: number | null;
}

export const PlayerList = (props: PlayerListProps) => {
  const { players, activePlayerIndex } = props;

  return (
    <div className="player-count">
      <label className="player-count-label">Players</label>
      {players?.map((player, idx) => {
        return (
          <div
            className={
              "player-name" +
              (activePlayerIndex === idx ? " active-player" : "")
            }
            key={idx}
          >
            {player}
          </div>
        );
      })}
    </div>
  );
};
