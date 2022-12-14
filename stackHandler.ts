import * as fs from "fs";
import Stack from "./stack";

interface IMove {
  numMoves: number;
  source: string;
  target: string;
}

//Test it out
export default class StackHandler {
  //Privates
  private mapOfStacks: Map<string, Stack>;

  //Moves loaded from file
  private static moves: IMove[] = [];

  constructor(mapOfStacks: Map<string, Stack>) {
    this.mapOfStacks = mapOfStacks;
    this.loadAndParseMoves();
  }

  private fireMove(move: IMove) {
    //Pop/Push the source/target(s)
    const source = this.mapOfStacks.get(move.source);
    const target = this.mapOfStacks.get(move.target);
    if (!source || !target) {
      return;
    }
    for (let i = 0; i < move.numMoves; i++) {
      target.push(source.pop());
    }
  }

  public fireMoves(): string {
    StackHandler.moves.forEach((moveTmp) => {
      this.fireMove(moveTmp);
    });
    let result = "";
    for (var i = 1; i <= 9; i++) {
      result += this.mapOfStacks.get(`${i}`)?.getTopElementValue();
    }
    return result;
  }

  private loadAndParseMoves() {
    const movesRaw = fs
      .readFileSync("./moves.txt", "utf-8")
      .split(/\r?\n/)
      .forEach(function (line) {
        const lineParts: unknown[] = line.split(" ");
        StackHandler.moves.push({
          numMoves: parseInt(lineParts[1] as string),
          source: lineParts[3] as string,
          target: lineParts[5] as string,
        });
      });
  }
}
