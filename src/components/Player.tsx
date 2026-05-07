import { useState, type Dispatch, type SetStateAction } from "react";
import type { PlayerSymbol, Players } from "../types";

type PlayerProps = {
  initialName: string;
  symbol: PlayerSymbol;
  activeSymbol: boolean;
  setPlayers: Dispatch<SetStateAction<Players>>;
};

export default function Player({ initialName, symbol, activeSymbol, setPlayers }: PlayerProps) {

  const [playerName, setPlayerName] = useState(initialName);
  const [isEditting, setEditting] = useState(false);

  function handleClickEdit() {
    setEditting(isEditting => !isEditting);
  }

  function handleName(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.value;
    setPlayerName(name);
    //Create a new object with the name edited
    setPlayers((prevPlayers) => {
      return ({ ...prevPlayers, [symbol]: name });
    });
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let edit = "Edit";
  if (isEditting) {
    edit = "Save";
    editablePlayerName = <input type="text" required value={playerName} onChange={handleName} />;
  }

  return (
    <li className={activeSymbol ? "active" : undefined}>
      <div className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </div>
      <button onClick={handleClickEdit}>{edit}</button>
    </li>
  );
}
