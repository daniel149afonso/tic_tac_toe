import type { GameTurn } from "../types";

type LogProps = {
  turns: GameTurn[];
};

export default function Log({ turns }: LogProps) {
  return (
    <ol id="log">
      {turns.map(turn => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          <p>
            Player: {turn.player + ", "}
            Index: {turn.square.row}, {turn.square.col}
          </p>
        </li>
      ))}
    </ol>
  );
}
