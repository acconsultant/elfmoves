import Stack from "./stack";
import StackHandler from "./stackhandler";

//Declare the map of stacks for the moves test
const mapOfStacks = new Map<string, Stack>([
  ["1", new Stack(["P", "D", "Q", "R", "V", "B", "H", "F"])],
  ["2", new Stack(["V", "W", "Q", "Z", "D", "L"])],
  ["3", new Stack(["C", "P", "R", "G", "Q", "Z", "L", "H"])],
  ["4", new Stack(["B", "V", "J", "F", "H", "D", "R"])],
  ["5", new Stack(["C", "L", "W", "Z"])],
  ["6", new Stack(["M", "V", "G", "T", "N", "P", "R", "J"])],
  ["7", new Stack(["S", "B", "M", "V", "L", "R", "J"])],
  ["8", new Stack(["J", "P", "D"])],
  ["9", new Stack(["V", "W", "N", "C", "D"])],
]);

//Make an instance of the stack handler
const stackHandler = new StackHandler(mapOfStacks);
const result = stackHandler.fireMoves();
console.log(result);
