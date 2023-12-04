import games from './data/games';
import cubeCounter from './model/cubeCounter';

let cubeComputer = new cubeCounter(games.input, 10,13,14);

// console.log(': efjnk ; kejnfkn kje; ejknkfjenfjn;'.split(': ')[1].split('; '));

// cubeComputer.getCubesQuantity('Game 99: 7 red, 9 green, 5 blue; 6 blue, 1 green; 4 green, 5 blue, 1 red; 8 green, 6 red, 7 blue; 1 blue, 2 red, 9 green')
console.log("Risultato: ", cubeComputer.computeIdSum());
