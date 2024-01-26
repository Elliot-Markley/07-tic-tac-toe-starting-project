import { useState } from "react";

export default function Player({
  initialName,
  playerSymbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [updatePlayer, setUpdatePlayer] = useState(false);

  function handleUpdatePlayerClick() {
    setUpdatePlayer((updating) => !updating);
    if (updatePlayer) {
      onChangeName(playerSymbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  if (updatePlayer) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChange}
      />
    );
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{playerSymbol}</span>
        <button onClick={handleUpdatePlayerClick}>{btnCaption}</button>
      </span>
    </li>
  );
}
