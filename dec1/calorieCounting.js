import { readFileSync } from "node:fs";
// First, get the string input for the puzzle
const input = readFileSync("puzzleInput.txt", { encoding: "utf-8" });

const elfCalories = input
  .split('\n\n')
  .map(elf => {
    return elf
      .split('\n')
      .reduce((total, current) => total + Number(current.trim()), 0);
})
  .sort((a, b) => b-a);

console.log(elfCalories[0] + elfCalories[1] + elfCalories[2]);
