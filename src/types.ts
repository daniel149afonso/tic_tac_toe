export type PlayerSymbol = "X" | "O";
export type Players = Record<PlayerSymbol, string>;
export type Square = { row: number; col: number };
export type GameTurn = { player: PlayerSymbol; square: Square };
export type Board = (PlayerSymbol | null)[][];
