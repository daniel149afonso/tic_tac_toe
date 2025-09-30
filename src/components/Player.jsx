import { useState } from "react";

export default function Player({name, symbol}) {
	const [isEditting, setEditting] = useState(false);
	function handleClickEdit(){
		setEditting((isEditting)=>!isEditting);
	}
	let playerName = <span class="player-name">{name}</span>;
	let edit = "Edit";
	if (isEditting)
	{
		edit = "Save";
		playerName = <input type="text" required defaultValue={name}/>;
	}
	return (
		<li>
			<div class="player">
				{playerName}
				<span class="player-symbol">{symbol}</span>
			</div>
			<button onClick={handleClickEdit}>{edit}</button>
		</li>
	);
}