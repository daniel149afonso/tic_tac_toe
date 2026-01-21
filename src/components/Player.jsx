import { useState } from "react";

export default function Player({initialName, symbol, activeSymbol, setPlayers}) {
	
	const [playerName, setPlayerName] = useState(initialName);
	const [isEditting, setEditting] = useState(false);

	function handleClickEdit(){
		setEditting(isEditting=>!isEditting);
	}
	function handleName(event){
		const name = event.target.value;
		setPlayerName(name);
		//Create a new object with the name edited
		setPlayers((prevPlayers)=>{
	
			return ({...prevPlayers,
				[symbol]: name});
		});
	}
	let editablePlayerName = <span class="player-name">{playerName}</span>;
	let edit = "Edit";
	if (isEditting)
	{
		edit = "Save";
		editablePlayerName = <input type="text" required value={playerName} onChange={handleName}/>;
	}
	return (
		<li className={activeSymbol ? "active" : undefined}>
			<div class="player">
				{editablePlayerName}
				<span className="player-symbol">{symbol}</span>
			</div>
			<button onClick={handleClickEdit}>{edit}</button>
		</li>
	);
}