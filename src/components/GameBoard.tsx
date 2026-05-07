import type { Board } from "../types";

type GameBoardProps = {
  onTriggerActivePlayer: (rowIndex: number, colIndex: number) => void;
  board: Board;
};

export default function GameBoard({ onTriggerActivePlayer, board }: GameBoardProps) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onTriggerActivePlayer(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
