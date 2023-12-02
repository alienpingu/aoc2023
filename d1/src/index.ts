import Calibrator from "./model/calibrator";
import puzzleInput from "./data/puzzleInput";

const calibrator = new Calibrator(puzzleInput);
const answer = calibrator.computeCalibration();

console.log("Advent Of Code 2023 - Day 1 - Trebuchet?!");
console.log("Calibration Document: 'https://adventofcode.com/2023/day/1/input'")
console.log("");
console.log("For the current input of coordinates the calibration value is: ", answer);
